import styles from './BottomNav.module.css'
import { Link } from 'react-router-dom'

interface IBottomNavProps {
  selected: "tasks" | "notes" | "courses" | "profile" | "tape";
}

export const BottomNav = ({ selected }: IBottomNavProps) => {
  return (
    <nav className={styles.nav}>
      <Link to="/tasks" className={styles.link}>
        <img
          src={selected === "tasks" ? "/public/tasks_selected.svg" : "/public/tasks.svg"}
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
          src={selected === "notes" ? "/public/notes_selected.svg" : "/public/notes.svg"}
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
          src={selected === "courses" ? "/public/courses_selected.svg" : "/public/courses.svg"}
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
          src={selected === "profile" ? "/public/profile_selected.svg" : "/public/profile.svg"}
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
          src={selected === "tape" ? "/public/tape_selected.svg" : "/public/tape.svg"}
          className={styles.icon}
        />
        <span
          className={`${styles.label} ${selected === "tape" ? styles.active : ""}`}
        >
          Лента
        </span>
      </Link>
    </nav>
  )
}
