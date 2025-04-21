import { createBrowserRouter } from "react-router-dom";
import { Routes } from "../shared/router/routes";
import { StartPage } from "../pages/start-page";
import { SignIn } from "../pages/signin";
import { SignUpStud } from "../pages/signup-stud";
import { SignUpPrepod } from "../pages/signup-prepod";
import { Setting } from "../pages/setting";
import { Tasks } from "../pages/tasks/ui/Tasks";
import { Courses } from "../pages/courses/ui/Courses";
import { Profile } from "../pages/profile/ui/Profile";
import { Tape } from "../pages/tape/ui/Tape";
import { Notes } from "../pages/notes/ui/Notes";

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
        path: Routes.SETTING,
        element: <Setting/>
    },
    {
        path: Routes.TASKS,
        element: <Tasks/>
    },
    {
        path: Routes.NOTES,
        element: <Notes/>
    },
    {
        path: Routes.COURSES,
        element: <Courses/>
    },
    {
       path: Routes.PROFILE,
       element: <Profile/> 
    },
    {
        path: Routes.TAPE,
        element: <Tape/>
    },
    {
        path: "*",
        element: <h1>404</h1>
    }
])

export default router;