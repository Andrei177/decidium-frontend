import { create } from "zustand";
import { CourseType } from "./types";

interface ICoursesStore{
    courses: CourseType[],
    setCourses: (newCourses: CourseType[]) => void;
}

export const useCoursesStore = create<ICoursesStore>(set => ({
    courses: [],
    setCourses: (newCourses) => set({courses: [...newCourses]})
}))