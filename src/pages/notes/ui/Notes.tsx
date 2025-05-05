import s from "./Notes.module.css";
import { BottomNav } from "../../../widgets/bottom-nav";
import pencil from "/note_create.svg";
import { CreateNote } from "../../../widgets/create_note";
import React, { useState } from "react";

export const Notes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={s.content}>
      <div className={s.titles}>
        <h1 className={s.title}>Пока нет заметок...</h1>
        <h2 className={s.subtitle}>
          Создавайте заметки для отслеживания прогресса и записи идей.
        </h2>
      </div>
      <div className={s.editButtonContainer}>
        <button
          className={s.editButton}
          onClick={() => setIsModalOpen(true)}
        >
          <img src={pencil} alt="Создать" className={s.editIcon} />
        </button>
      </div>
      <CreateNote isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div>
        <BottomNav selected="notes" />
      </div>
    </div>
  );
};