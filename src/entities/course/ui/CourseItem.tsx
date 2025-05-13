import s from "./CourseItem.module.css"

interface ICourseItem {
  title: string,
  img: string
}

export const CourseItem = ({ title, img }: ICourseItem) => {
  return (
    <div className={s.course}>
      <img src={img}/>
      <div className={s.title}>{title}</div>
    </div>
  )
}
