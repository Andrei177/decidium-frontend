import { FormWrapper, Input, Button } from "../../../shared";
import s from "./SignIn.module.css";

export const SignIn = () => {
    return (
        <FormWrapper>
            <form className={s.dd}>

                <label className={s.vxod}>Войти</label>
                <label className={s.mail} htmlFor="email">Email</label>
                <Input type="email" name="email" placeholder="Введите email..." />

                <label className={s.password} htmlFor="password">Пароль</label>
                <Input type="text" name="password" placeholder="Введите пароль..." />

                <Button  className={s.signIin}
                    onClick={(e) => {
                        e.preventDefault();
                    }}> Войти</Button>
                
                <button className={s.zabpass}
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}> Забыли пароль?</button>
                <button className={s.passRec}
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}> Еще нет аккаунта?</button>
            </form>


        </FormWrapper>
    )
}

