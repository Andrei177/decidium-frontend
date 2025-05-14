import { Routes } from "../../../shared"

export const isStudentPage = (pathname: string): boolean => {
    return pathname == Routes.PROFILE 
    || pathname == Routes.NOTES 
    || pathname == Routes.TAPE 
    || pathname == Routes.TASKS
    || pathname == Routes.COURSES
}