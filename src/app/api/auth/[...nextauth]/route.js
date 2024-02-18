import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

import { verifyPassword } from "@/utils/auth";

export const authOptions = {
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

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        return {
          ...token,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          firstName: token.firstName,
          lastName: token.lastName,
          role: token.role,
        },
      };
    },
  },
  session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
