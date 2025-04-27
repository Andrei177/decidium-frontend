import { useEffect, useState } from "react"
import { useAuthStore } from "../model/auth-store/auth-store"
import { refreshTokens } from "../api/authApi";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Routes } from "../../../shared";

export const AuthWrapper = () => {

    const [isLoading, setIsLoading] = useState(false);
    const { setIsAuth, hasRefreshed, setHasRefreshed } = useAuthStore();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (!hasRefreshed) {
            setIsLoading(true);
            refreshTokens()
                .then(res => {
                    console.log("Ответ при обновлении токенов", res)
                    setIsAuth(true);
                    if (pathname == Routes.SIGNIN
                        || pathname == Routes.SIGNUP_PREPOD
                        || pathname == Routes.SIGNUP_STUD
                        || pathname == Routes.ROOT) {
                        navigate(Routes.PROFILE);
                    }
                })
                .catch(err => {
                    console.error("Ошибка при обновлении токенов", err)
                    setIsAuth(false);
                    if (!(pathname == Routes.SIGNIN
                        || pathname == Routes.SIGNUP_PREPOD
                        || pathname == Routes.SIGNUP_STUD
                        || pathname == Routes.ROOT)) {
                        navigate(Routes.SIGNIN);
                    }
                })
                .finally(() => {
                    setIsLoading(false)
                    setHasRefreshed(true)
                })
        }
    }, [])

    return (
        <>
            {
                isLoading
                    ? <h1>Загрузка...</h1>
                    : <Outlet />
            }
        </>
    )
}
