import * as z from "zod";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// const phoneNumberRegex = /^(09)\d{9}$/;

const signUpFormSchema = z.object({
  email: z
    .string()
    .email("آدرس ایمیل نامعتبر است")
    .refine((value) => value !== "", {
      message: "آدرس ایمیل الزامی است",
    }),
  password: z
    .string()
    .regex(passwordRegex, {
      message: "رمز عبور باید حداقل 8 کاراکتر و شامل حروف و اعداد باشد",
    })
    .refine((value) => value !== "", { message: "رمز عبور الزامی است" }),
});

const signInFormSchema = z.object({
  email: z
    .string()
    .email("ایمیل معتبر وارد کنید")
    .refine((value) => value !== "", {
      message: "آدرس ایمیل الزامی است",
    }),
  password: z
    .string()
    .refine((value) => value !== "", { message: "رمز عبور الزامی است" }),
});

// const addAdvertisementSchema = z.object({
//   title: z
//     .string()
//     .min(3, { message: "عنوان باید حداقل دارای 3 کاراکتر باشد" })
//     .max(20, { message: "عنوان نباید بیشتر از 20 کاراکتر باشد" }),
//   price: z.string().refine((value) => value !== "", {
//     message: "لطفا قیمت مورد نظر را وارد کنید",
//   }),
//   phoneNumber: z
//     .string()
//     .refine((value) => value !== "", {
//       message: "لطفا شماره تماس خود را وارد کنید",
//     })
//     .refine((value) => phoneNumberRegex.test(value), {
//       message: "شماره تماس نامعتبر است",
//     }),
//   province: z.string(),
//   city: z.string(),
//   address: z.string().refine((value) => value !== "", {
//     message: "لطفا آدرس مورد نظر را وارد کنید",
//   }),
//   realEstate: z.string().refine((value) => value !== "", {
//     message: "لطفا بنگاه مورد نظر را وارد کنید",
//   }),
//   category: z.string(),
//   constructionDate: z.date().optional(),
//   amenities: z.array(z.string()).optional(),
//   rules: z.array(z.string()).optional(),
// });

export { signUpFormSchema, signInFormSchema };
