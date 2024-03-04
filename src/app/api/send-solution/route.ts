import connectDB from "@/lib/db";
import Solution from "@/models/solution";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  connectDB();
  const body = await req.json();
  const { senderEmail, problemId, solution } = body;
  try {
    const user = await User.findOne({ email: senderEmail });
    const senderId = user.id;
    const senderName = user.fullName;
    // console.log(senderName);
    // return NextResponse.json(senderEmail, { status: 201 });
    const newSolution = new Solution({
      senderId,
      senderName,
      problemId,
      solution,
    });

    if (newSolution) {
      await newSolution.save();
      return NextResponse.json(newSolution, { status: 201 });
    } else {
      return NextResponse.json({ error: "Invalid user data" }, { status: 400 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
