import s from "./Notes.module.css"
import { BottomNav } from "../../../widgets/bottom-nav"


export const  Notes = () => {
    return (
        <div className={s.content}>
            <div className={s.titles}>
                <h1 color='#FF00FF'>
                    Заметки
                </h1>
                <h1 className={s.title}>
                    Decidium
                </h1>
                <h2 className={s.subtitle}>
                    Transire suum pectus mundoque potiri
                </h2>
            </div>
        <div>
            <BottomNav selected="notes" />
        </div>
        </div>
    )
}
