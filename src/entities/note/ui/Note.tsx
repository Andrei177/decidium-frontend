import { NoteType } from "../model/types"
import s from "./Note.module.css"

export const Note = ({ title, text } : Omit<NoteType, "note_id">) => {
  return (
    <div className={s.note}>
        <div className={s.title}>{title}</div>
        <p className={s.description}>{text}</p>
    </div>
  )
}
