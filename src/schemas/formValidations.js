import * as z from "zod";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const signUpFormSchema = z.object({
  firstName: z.string().min(3, "نام الزامی است"),
  lastName: z.string().min(3, "نام خانوادگی الزامی است"),
  email: z.string().email("آدرس ایمیل نامعتبر است"),
  password: z.string().regex(passwordRegex, {
    message: "رمز عبور باید حداقل دارای ۸ کاراکتر و شامل حروف و اعداد باشد",
  }),
});

const signInFormSchema = z.object({
  email: z.string().email("ایمیل معتبر وارد کنید"),
  password: z
    .string()
    .refine((value) => value !== "", { message: "رمز عبور الزامی است" }),
});

export { signUpFormSchema, signInFormSchema };
