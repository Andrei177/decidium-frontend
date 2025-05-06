import { create } from "zustand";
import { Profile } from "./types";

type ProfileStore = Profile & {
    setProfile: (profile: Profile) => void,
}

export const useUserStore = create<ProfileStore>((set) => ({
    first_last_middle_name: "",
    avatar_image: "",
    email: "",
    id: undefined,
    phone_number: "",
    role: undefined,
    created_at: "",
    updated_at: "",
    setProfile: (profile) => set({...profile}) 
}))