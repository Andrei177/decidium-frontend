import s from "./testing.module.css"
import { BottomNav } from "../../../widgets/bottom-nav/ui/BottomNav"


export const  Testing = () => {
    return (
        <div className={s.content}>
            <div className={s.titles}>
                <h1 className={s.title}>
                    Decidium
                </h1>
                <h2 className={s.subtitle}>
                    Transire suum pectus mundoque potiri
                </h2>
            </div>
        <div>
            <BottomNav></BottomNav>
        </div>
        </div>
    )
}
