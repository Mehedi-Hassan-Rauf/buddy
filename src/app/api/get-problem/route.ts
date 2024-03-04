import connectDB from "@/lib/db";
import Problem from "@/models/problem";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  connectDB();
  try {
    const problems = await Problem.find();
    return NextResponse.json(problems, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
