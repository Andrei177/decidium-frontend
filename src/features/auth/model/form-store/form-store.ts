import { create } from "zustand";

interface IFormStore{
    email: string;
    password: string;
    fio: string;
    avatar: Blob | null;
    phoneNumber: string;
    role: number;

    setEmail: (newEmail: string) => void;
    setPassword: (newPass: string) => void;
    setFio: (newFio: string) => void;
    setFormData: (formData: IFormStore) => void;
    setAvatar: (newAvatar: File) => void;
    setPhoneNumber: (newPhone: string) => void;
    setRole: (newRole: number) => void;
}

export const useFormStore = create<IFormStore>(set => ({
    email: "",
    password: "",
    fio: "",
    avatar: null,
    phoneNumber: "",
    role: 10,

    setEmail: (newEmail) => set({email: newEmail}), 
    setPassword: (newPass) => set({password: newPass}),
    setFio: (newFio) => set({fio: newFio}),
    setFormData: (formData) => set({...formData}),
    setAvatar: (newAvatar) => set({avatar: newAvatar}),
    setPhoneNumber: (newPhone) => set({phoneNumber: newPhone}),
    setRole: (newRole) => set({role: newRole})
}))