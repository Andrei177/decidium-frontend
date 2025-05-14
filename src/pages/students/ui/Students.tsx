import { AppLayout } from "../../../widgets/app-layout"
import s from "./Students.module.css"

export const Students = () => {
  return (
    <AppLayout currentPage={"students"}>
      <h1 className={s.wrap}>
        Страница студентов
      </h1>
    </AppLayout>
  )
}