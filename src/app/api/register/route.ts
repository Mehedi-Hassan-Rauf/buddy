import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectDB from "@/lib/db";

export async function POST(req: NextRequest) {
  connectDB();
  try {
    const body = await req.json();
    const { fullName, email, password } = body;
    // const userData = body;

    //Confirm data exists
    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 401 }
      );
    }

    // check for duplicate emails
    const duplicate = await User.findOne({ email }).lean().exec();

    if (duplicate) {
      return NextResponse.json({ error: "Duplicate Email" }, { status: 409 });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullName,
      email,
      password: hashPassword,
    });

    if (newUser) {
      await newUser.save();

      return NextResponse.json(
        {
          _id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json({ error: "Invalid user data" }, { status: 400 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
