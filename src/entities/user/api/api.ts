import { Profile } from ".."
import { $privateApi } from "../../../shared"

export const getProfileInfo = async () => {
    const response = await $privateApi.get<Profile>("/users/me")

    return response
}