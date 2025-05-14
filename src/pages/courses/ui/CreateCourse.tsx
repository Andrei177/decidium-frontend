import { useState } from "react";
import { Modal } from "../../../shared";
import s from "./CreateCourse.module.css";
import { createCourse, useCoursesStore } from "../../../entities/course";
import { UploadFile } from "../../../widgets/upload-file";

interface ICreateCourse {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
}

export const CreateCourse = ({ isOpen, setIsOpen }: ICreateCourse) => {

  const { setCourses } = useCoursesStore();
  const [course, setCourse] = useState<{ title: string, course_image: Blob | null }>({ title: "", course_image: null });
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateCourse = () => {
    setIsLoading(true);
    createCourse(course.title, "", course.course_image)
    .then(res => {
      console.log("Ответ при создании курса", res)
      setCourses([])
      setCourse({title: "", course_image: null});
    })
    .catch(err => {
      console.error("Ошибка при создании курса", err)
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
            <label htmlFor="courseTitle" className={s.label}>
              Название курса
            </label>
            <input
              type="text"
              id="courseTitle"
              placeholder="Введите название..."
              className={s.input}
              value={course.title}
              onChange={e => setCourse({...course, title: e.target.value})}
            />
          </div>
          <div className={s.inputGroup}>
            <UploadFile file={course.course_image} setFile={(file: Blob) => setCourse({...course, course_image: file})} />
          </div>
          <button className={s.createButton} onClick={handleCreateCourse}>{isLoading ? "Создаём..." : "СОЗДАТЬ"}</button>
        </div>
      </div>
    </Modal>
  );
};