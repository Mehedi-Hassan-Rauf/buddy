import connectDB from "@/lib/db";
import Solution from "@/models/solution";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, params: any) {
  connectDB();
  try {
    const { id } = params.params;
    // console.log(id);
    const solutions = await Solution.find({
      problemId: id,
    });
    return NextResponse.json(solutions, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
