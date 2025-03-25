import { create } from "zustand";

interface IAuthStore{
    email: string;
    password: string;
    setEmail: (newEmail: string) => void;
    setPassword: (newPass: string) => void;
}

export const useAuthStore = create<IAuthStore>(set => ({
    email: "",
    password: "",
    setEmail: (newEmail) => set({email: newEmail}), 
    setPassword: (newPass) => set({password: newPass}), 
}))