import s from "./Tape.module.css"
import { AppLayout } from "../../../widgets/app-layout"

export const Tape = () => {
    return (
        <AppLayout currentPage="tape">
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
        </AppLayout>
    )
}
