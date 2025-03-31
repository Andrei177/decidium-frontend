import { create } from "zustand";

interface IAuthStore{
    email: string;
    password: string;
    fio: string;
    setEmail: (newEmail: string) => void;
    setPassword: (newPass: string) => void;
    setFio: (newFio: string) => void;
}

export const useAuthStore = create<IAuthStore>(set => ({
    email: "",
    password: "",
    fio: "",
    setEmail: (newEmail) => set({email: newEmail}), 
    setPassword: (newPass) => set({password: newPass}),
    setFio: (newFio) => set({fio: newFio}),
}))