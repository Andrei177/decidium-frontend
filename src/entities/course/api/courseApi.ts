import { $privateApi } from "../../../shared"
import { CourseType } from "../model/types"

export const createCourse = async (title: string, description: string, course_image: Blob) => {

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("course_image", course_image)

    const response = await $privateApi.post("/courses/", formData)

    return response
}

export const getCourses = async () => {
    const response = await $privateApi.get<CourseType[]>("/courses/");

    return response
}

export const getOneCourse = async (courseId: number) => {
    if(!courseId) return Promise.reject({message: "Не передан id курса"});

    const response = await $privateApi.get<CourseType>(`/courses/${courseId}`);

    return response
}

export const updateOneCourse = async (id: number | undefined, title: string, description: string, course_image: Blob) => {
    if(!id) return Promise.reject({message: "Не передан id курса"});

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("course_image", course_image);

    const response = await $privateApi.patch(`/courses/${id}`, formData);

    return response
}

export const deleteOneCourse = async (courseId: number) => {
    if(!courseId) return Promise.reject({message: "Не передан id курса"});

    const response = await $privateApi.delete<CourseType>(`/notes/${courseId}`);

    return response
}