import styles from './BottomNav.module.css'
import { Link } from 'react-router-dom'
import tasks from "/tasks.svg"
import tasksSelected from "/tasks_selected.svg"
import notes from "/notes.svg"
import notesSelected from "/notes_selected.svg"
import courses from "/courses.svg"
import coursesSelected from "/courses_selected.svg"
import profile from "/profile.svg"
import profileSelected from "/profile_selected.svg"
import tape from "/tape.svg"
import tapeSelected from "/tape_selected.svg"
import { useUserStore } from '../../../entities/user'
import { STUDENT_ROLE_NUMBER } from '../../../shared'

interface IBottomNavProps {
  selected: "tasks" | "notes" | "courses" | "profile" | "tape" | "students";
}

export const BottomNav = ({ selected }: IBottomNavProps) => {

  const role = useUserStore(state => state.role);

  return (
    <nav className={styles.nav}>
      {
        role == STUDENT_ROLE_NUMBER
          ?
          <>
            <Link to="/tasks" className={styles.link}>
              <img
                src={selected === "tasks" ? tasksSelected : tasks}
                className={styles.icon}
              />
              <span
                className={`${styles.label} ${selected === "tasks" ? styles.active : ""}`}
              >
                Задания
              </span>
            </Link>
            <Link to="/notes" className={styles.link}>
              <img
                src={selected === "notes" ? notesSelected : notes}
                className={styles.icon}
              />
              <span
                className={`${styles.label} ${selected === "notes" ? styles.active : ""}`}
              >
                Заметки
              </span>
            </Link>
            <Link to="/courses" className={styles.link}>
              <img
                src={selected === "courses" ? coursesSelected : courses}
                className={styles.icon}
              />
              <span
                className={`${styles.label} ${selected === "courses" ? styles.active : ""}`}
              >
                Курсы
              </span>
            </Link>
            <Link to="/profile" className={styles.link}>
              <img
                src={selected === "profile" ? profileSelected : profile}
                className={styles.icon}
              />
              <span
                className={`${styles.label} ${selected === "profile" ? styles.active : ""}`}
              >
                Профиль
              </span>
            </Link>
            <Link to="/tape" className={styles.link}>
              <img
                src={selected === "tape" ? tapeSelected : tape}
                className={styles.icon}
              />
              <span
                className={`${styles.label} ${selected === "tape" ? styles.active : ""}`}
              >
                Лента
              </span>
            </Link>
          </>
          :
          <>
            <Link to="/students" className={styles.link}>
              <img
                src={selected === "students" ? tasksSelected : tasks}
                className={styles.icon}
              />
              <span
                className={`${styles.label} ${selected === "students" ? styles.active : ""}`}
              >
                Студенты
              </span>
            </Link>
            <Link to="/courses" className={styles.link}>
              <img
                src={selected === "courses" ? coursesSelected : courses}
                className={styles.icon}
              />
              <span
                className={`${styles.label} ${selected === "courses" ? styles.active : ""}`}
              >
                Курсы
              </span>
            </Link>

          </>
      }

    </nav>
  )
}
