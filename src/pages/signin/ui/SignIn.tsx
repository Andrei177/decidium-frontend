export const SignIn = () => {
    return (
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />

            <label htmlFor="password">Password</label>
            <input type="text" name="password" />

            <label htmlFor="fio">ФИО</label>
            <input type="text" name="fio" />
        </form>
    )
}
