import { CoursesListItem } from "../../../entities/course"
import { BottomNav } from "../../../widgets/bottom-nav"
import s from "./Courses.module.css"


export const Courses = () => {
    return (
        <div className={s.content}>
            
            <CoursesListItem img="/lex.jpg" title="title courses"/>
            <div>
                <BottomNav selected="courses" />
            </div>
        </div>
    )
}
