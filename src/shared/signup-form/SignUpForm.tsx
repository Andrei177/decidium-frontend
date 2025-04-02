
import { useNavigate } from "react-router-dom";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import s from "./SignUpForm.module.css";


interface ISignUpForm{
   isStudent:boolean;
}




const SignUpForm = ({isStudent}:ISignUpForm) => {
    const navigate = useNavigate();

    return (
        <div className = {s.content}> 
        <form className={s.form}>
            <label className = {s.regStud}>Регистрация &shy; {isStudent?"Студента":"Преподавателя"}</label>
        <button className = {s.back} onClick={ () => navigate("/")}> &#10006;</button>
            <label className = {s.mail} htmlFor="email">Email</label>
            <Input type="email" name="email" placeholder="Введите email..."/>
            


            <label className = {s.pass} htmlFor="password">Password</label>
            <Input type="text" name="password" placeholder="Введите пароль..."/>
            
            <label className = {s.fio} htmlFor="fio">Имя пользователя</label>
            <Input type="text" name="fio" placeholder="Введите ФИО..."/>
            <Button className={s.butSave}>Сохранить</Button>
            <button className={s.havAcc}>Уже есть аккаунт?</button>
        </form>
        </div>
    )
}

export default SignUpForm
