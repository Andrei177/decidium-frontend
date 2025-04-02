import { PropsWithChildren } from "react"
import s from "./FormWrapper.module.css"

const FormWrapper = ({children} : PropsWithChildren) => {
  return (
    <div className={s.wrapper}>
      {children}
    </div>
  )
}

export default FormWrapper
