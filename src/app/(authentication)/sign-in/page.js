import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import SignInPage from "@/components/templates/SignInPage";

export const metadata = {
  title: "ورود | پروژه بوتواستارت",
};

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");

  return <SignInPage />;
}
