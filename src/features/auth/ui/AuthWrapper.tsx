import { useEffect, useState } from "react"
import { useAuthStore } from "../model/auth-store/auth-store"
import { refreshTokens } from "../api/authApi";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Loader, Routes } from "../../../shared";
import s from "./AuthWrapper.module.css"
import { isPublicPage } from "../lib/isPublicPage";

export const AuthWrapper = () => {

    const [isLoading, setIsLoading] = useState(true);
    const { setIsAuth } = useAuthStore();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        setIsLoading(true);
        refreshTokens()
            .then(res => {
                console.log("Ответ при обновлении токенов", res)
                setIsAuth(true);
                if (isPublicPage(pathname)) {
                    navigate(Routes.PROFILE, { replace: true });
                }
            })
            .catch(err => {
                console.error("Ошибка при обновлении токенов", err)
                setIsAuth(false);
                if (!isPublicPage(pathname)) {
                    navigate(Routes.SIGNIN, { replace: true });
                }
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <div className={s.loader_wrap}><Loader /></div>;
    }

    return <Outlet />;
}
