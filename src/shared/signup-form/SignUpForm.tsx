import Input from "../ui/input/Input"

const SignUpForm = () => {
    return (
        <form>
            <label htmlFor="email">Email</label>
            <Input type="email" name="email"/>

            <label htmlFor="password">Password</label>
            <Input type="text" name="password"/>
            
            <label htmlFor="fio">ФИО</label>
            <Input type="text" name="fio"/>
        </form>
    )
}

export default SignUpForm
