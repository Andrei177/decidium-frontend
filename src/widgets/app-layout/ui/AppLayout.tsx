import { ReactNode } from "react"
import s from "./AppLayout.module.css"
import { BottomNav } from "../../bottom-nav"
import { TopNav } from "../../top_nav"

interface IAppLayout{
  children: ReactNode,
  currentPage: "tasks" | "notes" | "courses" | "profile" | "tape"
}

export const AppLayout = ({ currentPage, children }: IAppLayout) => {
  return (
    <div className={s.layout}>
      <TopNav />
      <div className={s.content}>
        {children}
      </div>
      <BottomNav selected={currentPage} />
    </div>
  )
}
