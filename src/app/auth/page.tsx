import SignUp from "@/components/signup/page";
import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const AuthPage = async () => {
  const session = await getServerSession(options);
  if (session) {
    redirect("/all-problems");
  }
  return <SignUp />;
};

export default AuthPage;
