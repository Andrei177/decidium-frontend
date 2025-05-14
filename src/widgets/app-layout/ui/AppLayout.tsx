import { ReactNode, useEffect, useState } from "react"
import s from "./AppLayout.module.css"
import { BottomNav } from "../../bottom-nav"
import { TopNav } from "../../top_nav"
import { getProfileInfo, useUserStore } from "../../../entities/user"
import { Loader, PREPOD_ROLE_NUMBER, Routes, STUDENT_ROLE_NUMBER } from "../../../shared"
import { isStudentPage } from "../lib/isStudentPage"
import { useLocation, useNavigate } from "react-router-dom"

interface IAppLayout {
  children: ReactNode,
  currentPage: "tasks" | "notes" | "courses" | "profile" | "tape" | "students"
}

export const AppLayout = ({ currentPage, children }: IAppLayout) => {

  const [isLoading, setIsLoading] = useState(false)
  const { role, id, setProfile } = useUserStore()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!id) {
      setIsLoading(true)
      getProfileInfo()
        .then(res => {
          console.log("Ответ при получении профиля пользователя", res)
          setProfile(res.data);
        })
        .catch(err => {
          console.error("Ошибка при получении профиля пользователя", err)
        })
        .finally(() => setIsLoading(false))
    }
    if (role == STUDENT_ROLE_NUMBER && !isStudentPage(pathname) || role == PREPOD_ROLE_NUMBER && isStudentPage(pathname)) {
      navigate(Routes.COURSES) // если пользователь зашёл на страницу не своей роли,
      //  то сразу перенаправляем его на курсы,
      //  так как эта страница есть и у студента и у препода
    }
  }, [role])

  return (
    <div className={s.layout}>
      <TopNav />
      {
        isLoading
          ? <Loader />
          :
          <>
            <div className={s.content}>
              {children}
            </div>
            <BottomNav selected={currentPage} />
          </>
      }
    </div>
  )
}
