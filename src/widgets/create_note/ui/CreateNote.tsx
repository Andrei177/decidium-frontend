import s from "./CreateNote.module.css";

interface CreateNoteProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export const CreateNote = ({ isOpen, onClose }: CreateNoteProps) => {
    if (!isOpen) return null;
  
    return (
        <div className={s.modal}>
        <div className={s.header}>
          <button className={s.closeBtn} onClick={onClose}>
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
            ></textarea>
          </div>
          <button className={s.createButton}>СОЗДАТЬ</button>
        </div>
      </div>
    );
  };