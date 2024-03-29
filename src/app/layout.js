import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

import { YekanBakh } from "@/utils/fonts";

import NextAuthProvider from "@/providers/NextAuthProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

import "./globals.css";

export const metadata = {
  title: "املاک | پروژه بوتواستارت",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  try {
    await connectDB();

    const user = await User.findOne({ email: session?.user.email });

    return (
      <html dir="rtl" lang="fa">
        <body
          className={`w-full h-screen flex flex-col justify-between overflow-y-auto overflow-x-hidden ${YekanBakh.className}`}
          suppressHydrationWarning={true}
        >
          <NextAuthProvider>
            <Header user={JSON.parse(JSON.stringify(user))} />
            {children}
            <Footer />
          </NextAuthProvider>
        </body>
      </html>
    );
  } catch (err) {
    console.log(err);
  }
}
