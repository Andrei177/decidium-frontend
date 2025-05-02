import { z } from "zod";

const passwordValidation = z
  .string()
  .min(6, "Минимум 6 символов")
  .regex(/[A-Z]/, "Должна быть хотя бы одна заглавная буква")
  .regex(/[0-9]/, "Должна быть хотя бы одна цифра");

const fullNameValidation = z
  .string()
  .min(2, "Минимум 2 символа")
  .regex(
    /^[A-Za-zА-Яа-яЁё]+(?:\s+[A-Za-zА-Яа-яЁё]+)+$/,
    "Минимум 2 слова"
  );

export const SignupFormSchema = z.object({
  email: z.string().email("Неккоректный email"),
  password: passwordValidation,
  fio: fullNameValidation,
});

export type SignupFormSchemaType = z.infer<typeof SignupFormSchema>;
