import s from "./Tape.module.css"
import { BottomNav } from "../../../widgets/bottom-nav"


export const  Tape = () => {
    return (
        <div className={s.content}>
            <div className={s.titles}>
            <h1 color='#FF00FF'>
                    Лента
                </h1>
                <h1 className={s.title}>
                    Decidium
                </h1>
                <h2 className={s.subtitle}>
                    Transire suum pectus mundoque potiri
                </h2>
            </div>
        <div>
            <BottomNav selected="tape" />
        </div>
        </div>
    )
}
