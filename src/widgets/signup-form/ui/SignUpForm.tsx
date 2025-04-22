
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../shared/router/routes";
import { Button, Input, FormWrapper } from "../../../shared";
import s from "./SignUpForm.module.css";

interface ISignUpForm {
    isStudent: boolean;
}

export const SignUpForm: FC<ISignUpForm> = ({ isStudent }) => {
    const navigate = useNavigate();

    return (
        <FormWrapper>
            <form className={s.form}>
                <label className={s.regStud}>Регистрация &shy; {isStudent ? "студента" : "преподавателя"}</label>
                <button
                    className={s.back}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/")
                    }}>
                    &#10006;
                </button>
                <label className={s.mail} htmlFor="email">Email</label>
                <Input type="email" name="email" placeholder="Введите email..." />

                <label className={s.pass} htmlFor="password">Пароль</label>
                <Input type="text" name="password" placeholder="Введите пароль..." />

                <label className={s.fio} htmlFor="fio">Имя пользователя</label>
                <Input type="text" name="fio" placeholder="Введите ФИО..." />
                <Button className={s.butSave} onClick={(e) => e.preventDefault()}>Сохранить</Button>
                <button 
                    className={s.havAcc}
                    onClick={(e) => {
                        e.preventDefault()
                        navigate(Routes.SIGNIN)
                    }}
                >
                    Уже есть аккаунт?
                </button>
            </form>
        </FormWrapper>
    )
}
