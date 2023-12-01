import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

import { verifyPassword } from "@/utils/auth";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await connectDB();
        } catch (err) {
          console.log(err);
          throw new Error("خطایی در سرور رخ داده است");
        }

        const { email, password } = credentials;

        const user = await User.findOne({ email });
        if (!user) throw new Error("حساب کاربری یافت نشد");

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

        return {
          email,
        };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
