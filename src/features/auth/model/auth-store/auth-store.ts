import { create } from "zustand";

interface IAuthStore{
    isAuth: boolean;
    setIsAuth: (bool: boolean) => void; 
}

export const useAuthStore = create<IAuthStore>(set => ({
    isAuth: false,
    setIsAuth: (bool) => set({isAuth: bool})
}))