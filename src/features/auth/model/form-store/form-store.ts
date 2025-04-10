import { create } from "zustand";

interface IFormStore{
    email: string;
    password: string;
    fio: string;
    setEmail: (newEmail: string) => void;
    setPassword: (newPass: string) => void;
    setFio: (newFio: string) => void;
}

export const useFormStore = create<IFormStore>(set => ({
    email: "",
    password: "",
    fio: "",
    setEmail: (newEmail) => set({email: newEmail}), 
    setPassword: (newPass) => set({password: newPass}),
    setFio: (newFio) => set({fio: newFio}),
}))