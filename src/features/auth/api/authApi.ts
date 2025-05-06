import { $privateApi } from "../../../shared"

export const refreshTokens = async () => {
    const response = await $privateApi.post("/jwt/refresh");

    if(response.headers.authorization){
        localStorage.setItem("accessToken", response.headers.authorization.split(" ")[1])
    }

    return response
}

export const login = async (email: string, password: string) => {
    const response =  await $privateApi.post("/auth/login", {
        email,
        password
    })

    if(response.headers.authorization){
        localStorage.setItem("accessToken", response.headers.authorization.split(" ")[1])
    }

    return response
}

export const signup = async (email: string, password: string, fio: string, role: number, phoneNumber: string, avatar: Blob | null) => {

    const formData = new FormData();
    formData.append("email", email)
    formData.append("password", password)
    formData.append("first_last_middle_name", fio)
    formData.append("role", String(role))
    formData.append("phone_number" , phoneNumber)
    if(avatar){
        formData.append("avatar_image" , avatar)
    }

    const response = await $privateApi.post("/auth/signup", formData)

    if(response.headers.authorization){
        localStorage.setItem("accessToken", response.headers.authorization.split(" ")[1])
    }

    return response
}

export const logout = async () => {
    const response = await $privateApi.delete("/auth/logout");

    if(response.status == 200) localStorage.removeItem("accessToken");

    return response;
}