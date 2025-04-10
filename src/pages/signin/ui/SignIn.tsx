import FormWrapper from "../../../shared/ui/form-wrapper/FormWrapper";
import Button from "../../../shared/ui/button/Button";
import Input from "../../../shared/ui/input/Input";
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

