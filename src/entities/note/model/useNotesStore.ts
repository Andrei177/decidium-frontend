import { create } from "zustand";
import { NoteType } from "./types";

interface INotesStore {
    notes: NoteType[],
    setNotes: (newNotes: NoteType[]) => void
}

export const useNotesStore = create<INotesStore>(set => ({
    notes: [],
    setNotes: (newNotes) => set({notes: newNotes})
}))