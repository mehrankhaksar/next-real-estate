import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

import { Vazir } from "@/utils/fonts";

import NextAuthProvider from "@/providers/NextAuthProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <html lang="fa" dir="rtl">
        <body
          className={`font-Vazir ${Vazir.variable}`}
          suppressHydrationWarning
        >
          <NextAuthProvider>
            <ThemeProvider defaultTheme="light" attribute="class">
              <Header user={JSON.parse(JSON.stringify(user))} />
              {children}
              <Footer />
            </ThemeProvider>
          </NextAuthProvider>
        </body>
      </html>
    );
  } catch (err) {
    console.log(err);
  }
}
