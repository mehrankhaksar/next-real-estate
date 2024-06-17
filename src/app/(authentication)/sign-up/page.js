import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import SignUpPage from "@/components/templates/SignUpPage";

export const metadata = {
  title: "ثبت نام | پروژه بوتواستارت",
};

export default async function SignUp() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");

  return <SignUpPage />;
}
