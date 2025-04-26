import { create } from "zustand";

interface IAuthStore{
    isAuth: boolean;
    setIsAuth: (bool: boolean) => void; 
    hasRefreshed: boolean;
    setHasRefreshed: (bool: boolean) => void; 
}

export const useAuthStore = create<IAuthStore>(set => ({
    isAuth: false,
    setIsAuth: (bool) => set({isAuth: bool}),
    hasRefreshed: false,
    setHasRefreshed: (bool) => set({hasRefreshed: bool})
}))