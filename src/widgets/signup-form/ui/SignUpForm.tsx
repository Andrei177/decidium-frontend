
import { ChangeEvent, FC, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, FormWrapper, Routes } from "../../../shared";
import s from "./SignUpForm.module.css";
import { SignupFormSchema } from "../model/signup-form.schema";
import { z } from "zod";
import { useFormStore } from "../../../features/auth";

interface ISignUpForm {
    isStudent: boolean;
}

export const SignUpForm: FC<ISignUpForm> = ({ isStudent }) => {
    const navigate = useNavigate();

    const formStore = useFormStore();

    const [errors, setErrors] = useState<Record<string, string>>({ email: "", password: "", fio: "" });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name in formStore) {
            formStore.setFormData({
                ...formStore,
                [name]: value
            });
        }
    }

    const handleSave = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            SignupFormSchema.parse(formStore);
            setErrors({}); // Сброс ошибок при успешной валидации
            if(isStudent){
                formStore.setRole(10);
            }
            else{
                formStore.setRole(50);
            }
            console.log('Данные с формы', formStore);
            navigate(Routes.SETTING);
        } catch (err) {
            if (err instanceof z.ZodError) {
                const formattedErrors: Record<string, string> = {};
                err.errors.forEach(error => {
                    formattedErrors[error.path[0]] = error.message;
                });
                setErrors(formattedErrors);
            }
        }
    }

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
                <div className={s.form_item}>
                    <label className={s.mail} htmlFor="email">Email</label>
                    <Input type="email" name="email" placeholder="Введите email..." value={formStore.email} onChange={handleChange} />
                    <p className={s.form_item_err}>{errors.email ? errors.email : ""}</p>
                </div>
                <div className={s.form_item}>
                    <label className={s.pass} htmlFor="password">Пароль</label>
                    <Input type="text" name="password" placeholder="Введите пароль..." value={formStore.password} onChange={handleChange} />
                    <p className={s.form_item_err}>{errors.password ? errors.password : ""}</p>
                </div>
                <div className={s.form_item}>
                    <label className={s.fio} htmlFor="fio">Имя пользователя</label>
                    <Input type="text" name="fio" placeholder="Введите ФИО..." value={formStore.fio} onChange={handleChange} />
                    <p className={s.form_item_err}>{errors.fio ? errors.fio : ""}</p>
                </div>
                <Button className={s.butSave} onClick={handleSave}>Сохранить</Button>
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
