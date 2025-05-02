import { Routes } from "../../../shared";

export const isPublicPage = (pathname: string) => {
  return (
    pathname == Routes.SIGNIN ||
    pathname == Routes.SIGNUP_PREPOD ||
    pathname == Routes.SIGNUP_STUD ||
    pathname == Routes.ROOT
  );
};
