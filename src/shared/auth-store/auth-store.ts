import { create } from "zustand";

interface IAuthStore{
    email: string;
    password: string;
}

export const useAuthStore = create<IAuthStore>(set => ({
    email: "",
    password: ""
}))