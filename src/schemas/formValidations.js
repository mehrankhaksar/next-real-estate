import * as z from "zod";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const signUpFormSchema = z.object({
  email: z.string().email("ایمیل معتبر وارد کنید"),
  password: z
    .string()
    .min(5, {
      message: "رمز عبور باید حداقل دارای ۵ کاراکتر باشد",
    })
    .regex(passwordRules, { message: "رمز عبور ضعیف است" }),
});

const signInFormSchema = z.object({
  email: z.string().email("ایمیل خود را وارد کنید"),
  password: z.string().min(5, { message: "رمز عبور خود را وارد کنید" }),
});

export { signUpFormSchema, signInFormSchema };
