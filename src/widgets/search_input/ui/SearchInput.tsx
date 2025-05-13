import { Modal } from "../../../shared";
import s from "./SearchInput.module.css";

interface ISearch {
  isSearch: boolean;
  setIsSearch: (bool: boolean) => void;
}

export const SearchInput = ({ isSearch, setIsSearch }: ISearch) => {
  return (
    <Modal showModal={isSearch} setShowModal={setIsSearch}>
      <div className={s.modal_inner}>
        <div className={s.header}>
          <button className={s.closeBtn} onClick={() => setIsSearch(false)}>
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