import connectDB from "@/lib/db";
import Problem from "@/models/problem";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  connectDB();
  const body = await req.json();
  const { name, des, email } = body;
  //Confirm data exists
  if (!name || !des) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }
  try {
    const user = await User.findOne({ email: email });
    const userId = user.id;
    const newProblem = new Problem({
      userId,
      name,
      des,
    });

    if (newProblem) {
      await newProblem.save();

      return NextResponse.json(
        {
          _id: newProblem._id,
          name: newProblem.name,
          email: newProblem.des,
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
