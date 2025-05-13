import axios, { AxiosError } from "axios";
import { API_URL } from "../config/backend";
import { Routes } from "../router/routes";

export const $privateApi = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

$privateApi.interceptors.request.use((req) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
});

$privateApi.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    // Проверяем, что это 401 ошибка и что запрос еще не повторялся
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !(originalRequest as any)._retry
    ) {
      (originalRequest as any)._retry = true; // Помечаем запрос как повторный

      try {
        const refreshResponse = await $privateApi.post("/jwt/refresh");

        if (refreshResponse.data.accessToken) {
          localStorage.setItem("accessToken", refreshResponse.data.accessToken);
        }

        originalRequest.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;

        return $privateApi(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        window.location.pathname = Routes.SIGNIN;
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
