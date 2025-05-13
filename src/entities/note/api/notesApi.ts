import { $privateApi } from "../../../shared"
import { NoteType } from "../model/types"

export const createNote = async (title: string, text: string) => {
    const response = await $privateApi.post("/notes/", {
        title,
        text
    })

    return response
}

export const getNotes = async () => {
    const response = await $privateApi.get<NoteType[]>("/notes/");

    return response
}

export const getOneNote = async (noteId: number) => {
    const response = await $privateApi.get<NoteType>(`/notes/${noteId}`);

    return response
}

export const updateOneNote = async (updatedNote: NoteType) => {
    const response = await $privateApi.patch<NoteType>(`/notes/${updatedNote.id}`, {
        title: updatedNote.title,
        text: updatedNote.text
    });

    return response
}

export const deleteOneNote = async (noteId: number) => {
    const response = await $privateApi.delete<NoteType>(`/notes/${noteId}`);

    return response
}