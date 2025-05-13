import { useState } from "react";
import { Modal } from "../../../shared";
import s from "./CreateNote.module.css";
import { createNote, NoteType, useNotesStore } from "../../../entities/note";

interface ICreateNote {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
}

export const CreateNote = ({ isOpen, setIsOpen }: ICreateNote) => {

  const { notes, setNotes } = useNotesStore();
  const [note, setNote] = useState<NoteType>({title: "", text: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateNote = () => {
    setIsLoading(true);
    createNote(note.title, note.text)
    .then(res => {
      console.log("Ответ при создании заметки", res)
      setNotes([...notes, { ...note }])
      setNote({title: "", text: ""});
    })
    .catch(err => {
      console.error("Ошибка при создании заметки", err)
    })
    .finally(() => {
      setIsLoading(false)
      setIsOpen(false)
    })
  }

  return (
    <Modal showModal={isOpen} setShowModal={setIsOpen}>
      <div className={s.modal_inner}>
        <div className={s.header}>
          <button className={s.closeBtn} onClick={() => setIsOpen(false)}>
            ✖
          </button>
        </div>

        <div className={s.body}>
          <div className={s.inputGroup}>
            <label htmlFor="noteTitle" className={s.label}>
              Название заметки
            </label>
            <input
              type="text"
              id="noteTitle"
              placeholder="Введите название..."
              className={s.input}
              value={note.title}
              onChange={e => setNote({...note, title: e.target.value})}
            />
          </div>
          <div className={s.inputGroup}>
            <label htmlFor="noteText" className={s.label}>
              Текст заметки
            </label>
            <textarea
              id="noteText"
              placeholder="Введите текст..."
              className={s.textarea}
              value={note.text}
              onChange={e => setNote({...note, text: e.target.value})}
            ></textarea>
          </div>
          <button className={s.createButton} onClick={handleCreateNote}>{isLoading ? "Создаём..." : "СОЗДАТЬ"}</button>
        </div>
      </div>
    </Modal>
  );
};