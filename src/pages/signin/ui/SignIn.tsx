import { useNavigate } from "react-router-dom";
import { FormWrapper, Input, Button, Routes } from "../../../shared";
import s from "./SignIn.module.css";
import { login, useFormStore } from "../../../features/auth";
import { MouseEvent, useState } from "react";
import { SignInSchema } from "../model/signin.schema"
import { z } from "zod";

export const SignIn = () => {

    const navigate = useNavigate();

    const formStore = useFormStore();
    const [errors, setErrors] = useState<Record<string, string>>({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSave = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            SignInSchema.parse(formStore);
            setErrors({});
            console.log('Данные с формы входа', formStore);

            setIsLoading(true);
            login(formStore.email, formStore.password)
            .then(res => {
                console.log("Ответ при входе", res)
                navigate(Routes.PROFILE)
            })
            .catch(err => {
                console.error("Ошибка при входе", err)
            })
            .finally(() => setIsLoading(false))

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
            <form className={s.dd}>
                <label className={s.vxod}>Войти</label>
                <div className={s.form_item}>
                    <label className={s.mail} htmlFor="email">Email</label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Введите email..."
                        value={formStore.email}
                        onChange={e => formStore.setEmail(e.target.value)}
                    />
                    <p className={s.form_item_err}>{errors.email ? errors.email : ""}</p>
                </div>
                <div className={s.form_item}>
                    <label className={s.password} htmlFor="password">Пароль</label>
                    <Input
                        type="text"
                        name="password"
                        placeholder="Введите пароль..."
                        value={formStore.password}
                        onChange={e => formStore.setPassword(e.target.value)}
                    />
                    <p className={s.form_item_err}>{errors.password ? errors.password : ""}</p>
                </div>
                <Button className={s.signIin}
                    onClick={handleSave}
                >
                    Войти</Button>

                <button className={s.zabpass}
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    Забыли пароль?
                </button>
                <button className={s.passRec}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(Routes.ROOT)
                    }}
                >
                    Еще нет аккаунта?
                </button>
            </form>
        </FormWrapper>
    )
}

