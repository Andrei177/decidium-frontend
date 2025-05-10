import s from "./Courses.module.css"
import { BottomNav } from "../../../widgets/bottom-nav"
import { TopNav } from "../../../widgets/top_nav/ui/TopNav"

export const Courses = () => {
    return (
        <div className={s.content}>
            <div>
                <TopNav />
            </div>
            <div className={s.titles}>
                <h1 color='#FF00FF'>
                    Курсы
                </h1>
                <h1 className={s.title}>
                    Decidium
                </h1>
                <h2 className={s.subtitle}>
                    Transire suum pectus mundoque potiri
                </h2>
            </div>
            <div>
                <BottomNav selected="courses" />
            </div>
        </div>
    )
}
