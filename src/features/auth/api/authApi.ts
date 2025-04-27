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

    return await $publicApi.post("/auth/signup", formData)
}

export const logout = async () => {
    return await $privateApi.delete("/auth/logout");
}