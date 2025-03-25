import { Link } from "react-router-dom"
import { Routes } from "../../../app/router/routes"

export const StartPage = () => {
    return (
        <>
            <h1>
                Decidium
            </h1>
            <button>
                <Link to={Routes.SIGNUP_STUD}>Регистрация студента</Link>
            </button>
            <button>
            <Link to={Routes.SIGNUP_STUD}>Регистрация преподавателя</Link>
            </button>
        </>
    )
}
