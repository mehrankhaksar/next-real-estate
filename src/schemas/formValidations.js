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

const userFormSchema = z.object({
  avatar: z
    .string()
    .optional()
    .superRefine((value = "", ctx) => {
      const buffer = Buffer.from(value.substring(value.indexOf(",") + 1));

      if (buffer.length / 1e6 >= 5) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "حجم عکس باید کمتر از 5 مگابایت باشد",
        });
      }
    }),
  firstName: z.string().superRefine((value, ctx) => {
    if (!value) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "نام الزامی است",
      });
    }

    if (value.length < 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "نام باید حداقل دارای 3 کاراکتر باشد",
      });
    }
  }),
  lastName: z.string().superRefine((value, ctx) => {
    if (!value) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "نام خانوادگی الزامی است",
      });
    }

    if (value.length < 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "نام خانوادگی باید حداقل دارای 3 کاراکتر باشد",
      });
    }
  }),
});

export { signUpFormSchema, signInFormSchema, userFormSchema };
