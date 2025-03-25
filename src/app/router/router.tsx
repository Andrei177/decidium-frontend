import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { StartPage } from "../../pages/start-page";
import { SignIn } from "../../pages/signin";
import { SignUpStud } from "../../pages/signup-stud";
import { SignUpPrepod } from "../../pages/signup-prepod";

const router = createBrowserRouter([
    {
        path: Routes.ROOT,
        element: <StartPage/>
    },
    {
        path: Routes.SIGNUP_STUD,
        element: <SignUpStud/>
    },
    {
        path: Routes.SIGNUP_PREPOD,
        element: <SignUpPrepod/>
    },
    {
        path: Routes.SIGNIN,
        element: <SignIn/>
    },
    {
        path: "*",
        element: <h1>404</h1>
    }
])

export default router;