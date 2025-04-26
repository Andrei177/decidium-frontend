import { $privateApi, $publicApi } from "../../../shared"

export const refreshTokens = async () => {
    return await $privateApi.post("/jwt/refresh");
}

export const login = async (email: string, password: string) => {
    return await $publicApi.post("/auth/login", {
        email,
        password
    })
}

export const signup = async (email: string, password: string, fio: string, role: number, phoneNumber: string, avatar: File ) => {
    return await $publicApi.post("/auth/signup", {
        email,
        password,
        first_last_middle_name: fio,
        role,
        phone_number: phoneNumber,
        avatar_image: avatar
    })
}

export const logout = async () => {
    return await $privateApi.delete("/auth/logout");
}