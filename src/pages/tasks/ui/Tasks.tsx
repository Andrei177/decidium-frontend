import s from "./tasks.module.css"
import { BottomNav } from "../../../widgets/bottom-nav/ui/BottomNav"


export const  Tasks = () => {
    return (
        <div className={s.content}>
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
        <div>
            <BottomNav selected="tasks" />
        </div>
        </div>
    )
}
