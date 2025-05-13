import s from "./tasks.module.css"
import { AppLayout } from "../../../widgets/app-layout"


export const Tasks = () => {
    return (
        <AppLayout currentPage="tasks">
            <div className={s.titles}>
                <h1 color='#FF00FF'>
                    Задания
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
