import s from "./Courses.module.css"
import { AppLayout } from "../../../widgets/app-layout"
import { useUserStore } from "../../../entities/user"
import { useEffect, useState } from "react";
import { CourseItem, getCourses, useCoursesStore } from "../../../entities/course";
import { Button, PREPOD_ROLE_NUMBER, Variants } from "../../../shared";
import { CreateCourse } from "./CreateCourse";

export const Courses = () => {

    const { role } = useUserStore();
    const { setCourses, courses } = useCoursesStore();
    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        if (courses.length == 0) {
            getCourses()
                .then(res => {
                    console.log("Курсы", res)
                    setCourses(res.data)
                })
                .catch(err => {
                    console.error("Ошибка при получении курсов", err)
                })
        }
    }, [courses])

    return (
        <AppLayout currentPage="courses">
            <div className={s.courses}>
                {
                    courses.length > 0
                        ?
                        <div className={s.courses_list}>
                            {courses.map(c => <CourseItem key={c.id} title={c.title} img={c.course_image} />)}
                        </div>
                        :
                        <h1 className={s.title}>
                            Курсов пока нет, но скоро появятся
                        </h1>
                }
                {
                    role == PREPOD_ROLE_NUMBER
                    &&
                    <Button
                        variant={Variants.white}
                        onClick={() => setIsOpenModal(true)}
                    >
                        СОЗДАТЬ НОВЫЙ КУРС +
                    </Button>
                }
            </div>
            <CreateCourse isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
        </AppLayout>
    )
}
