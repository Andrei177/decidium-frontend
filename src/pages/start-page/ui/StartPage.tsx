import { Link } from "react-router-dom"
import { Routes } from "../../../shared/router/routes"
import Button, { Variants } from "../../../shared/ui/button/Button"
import s from "./StartPage.module.css"


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
            <Link to={Routes.SIGNIN}>
            <Button variant={Variants.white} className={s.btn}>
                        Войти
                    </Button>
                </Link>
                <Link to={Routes.SIGNUP_STUD}>
                    <Button className={s.btn}>
                        Регистрация студента
                    </Button>
                </Link>
                <Link to={Routes.SIGNUP_PREPOD}>
                    <Button variant={Variants.white} className={s.btn}>
                        Регистрация преподавателя
                    </Button>
                </Link>
            </div>
        </div>
    )
}
