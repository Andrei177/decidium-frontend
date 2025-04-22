import { PropsWithChildren } from "react"
import s from "./FormWrapper.module.css"

export const FormWrapper = ({children} : PropsWithChildren) => {
  return (
    <div className={s.wrapper}>
      {children}
    </div>
  )
}
