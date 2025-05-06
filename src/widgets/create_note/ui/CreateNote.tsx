import { Modal } from "../../../shared";
import s from "./CreateNote.module.css";

interface ICreateNote {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
}

export const CreateNote = ({ isOpen, setIsOpen }: ICreateNote) => {
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
    </Modal>
  );
};