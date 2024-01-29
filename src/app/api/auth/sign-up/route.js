import { NextResponse } from "next/server";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

import { hashPassword } from "@/utils/auth";

export async function POST(req) {
  try {
    await connectDB();

    const { firstName, lastName, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return NextResponse.json(
        { error: "حساب کاربری وحود دارد" },
        { status: 422 }
      );

    const hashedPassword = await hashPassword(password);

    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    return NextResponse.json(
      { message: "حساب کاربری با موفقیت ساخته شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "خطایی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
