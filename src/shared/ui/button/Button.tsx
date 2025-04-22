import { ButtonHTMLAttributes, FC } from "react"
import s from "./Button.module.css"
import cn from "classnames"

export enum Variants{
    blue="blue",
    white="white"
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    variant?: Variants
}

export const Button: FC<IButton> = ({className, variant = Variants.blue, ...props}) => {
  return (
    <button {...props} className={cn(s.btn, s[variant], className)}>
      {props.children}
    </button>
  )
}
