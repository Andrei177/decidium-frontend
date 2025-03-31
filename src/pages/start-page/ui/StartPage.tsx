import { Link } from "react-router-dom"
import { Routes } from "../../../app/router/routes"
import s from "./StartPage.module.css"
import Button, { Variants } from "../../../shared/ui/button/Button"

export const StartPage = () => {
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
            <div className={s.btns}>
                <Button className={s.btn}>
                    <Link to={Routes.SIGNUP_STUD}>Регистрация студента</Link>
                </Button>
                <Button variant={Variants.white} className={s.btn}>
                    <Link to={Routes.SIGNUP_STUD}>Регистрация преподавателя</Link>
                </Button>
            </div>
        </div>
    )
}
