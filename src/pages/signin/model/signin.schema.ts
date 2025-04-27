import { z } from "zod";

const passwordValidation = z
  .string()
  .min(6, "Минимум 6 символов")
  .regex(/[A-Z]/, "Должна быть хотя бы одна заглавная буква")
  .regex(/[0-9]/, "Должна быть хотя бы одна цифра");

export const SignInSchema = z.object({
    email: z.string().email("Неккоректный email"),
    password: passwordValidation
})