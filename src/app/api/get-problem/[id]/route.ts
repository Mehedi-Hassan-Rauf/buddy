import connectDB from "@/lib/db";
import Problem from "@/models/problem";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  connectDB();
  try {
    const { params } = context;
    // console.log(params.id);

    const problems = await Problem.find({
      userId: params.id,
    });

    return NextResponse.json(problems, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
