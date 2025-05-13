import s from "./Notes.module.css";
import pencil from "/note_create.svg";
import { CreateNote } from "./CreateNote"
import { useEffect, useState } from "react";
import { getNotes, Note, useNotesStore } from "../../../entities/note";
import { AppLayout } from "../../../widgets/app-layout";

export const Notes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { notes, setNotes } = useNotesStore();

  useEffect(() => {
    getNotes()
      .then(res => {
        console.log("Заметки", res)
        setNotes(res.data)
      })
      .catch(err => {
        console.error("Ошибка при получении заметок", err)
      })
  }, [])

  return (
    <AppLayout currentPage="notes">
      {
        notes.length > 0
          ? <div className={s.notes}>
            {
              notes.map(note => <Note title={note.title} text={note.text} key={note.id} />)
            }
          </div>
          : <div className={s.titles}>
            <h1 className={s.title}>Пока нет заметок...</h1>
            <h2 className={s.subtitle}>
              Создавайте заметки для отслеживания прогресса и записи идей.
            </h2>
          </div>
      }
      <div className={s.editButtonContainer}>
        <button
          className={s.editButton}
          onClick={() => setIsModalOpen(true)}
        >
          <img src={pencil} alt="Создать" className={s.editIcon} />
        </button>
      </div>
      <CreateNote isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </AppLayout>
  );
};