import s from "./Courses.module.css"
import { AppLayout } from "../../../widgets/app-layout"

export const Courses = () => {
    return (
        <AppLayout currentPage="courses">
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
        </AppLayout>
    )
}
