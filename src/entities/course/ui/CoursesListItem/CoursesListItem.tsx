import { FC } from "react";
import s from "./CoursesListItem.module.css";

interface ICoursesListItem {
    img: string;
    title: string;
}

export const CoursesListItem: FC<ICoursesListItem> = ({img, title}) => {
  return (
    <div className={s.aye}>
        <img className = {s.imga} src={img} />
        <div className={s.text}>{title}</div>
    </div>
  )
}
