"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ShareProblems = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const { data: session } = useSession();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name || !des) return;
    const data = {
      name,
      des,
      email: session?.user?.email,
    };
    await axios
      .post("/api/send-problem", data)
      .then((res) => {
        toast.success("Posted Successfully");
        // console.log(res.data);
      })
      .catch((err) => {
        toast.error(err);
      });
    setName("");
    setDes("");
  };
  return (
    <div className="w-11/12 h-screen px-5 sm:w-9/12 flex flex-col justify-center items-center gap-10">
      <header className="flex flex-col gap-2 mt-5">
        <h1 className="text-4xl text-center">Share your problem freely!</h1>
        <h2 className="text-center">
          Anyone from this community will answer with probable solution
        </h2>
      </header>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">
          <label className="font-medium text-[#36485C] lg:text-[18px]">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-2 py-2 text-[#36485C] lg:text-[18px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-[#36485C] lg:text-[18px]">
            Problem
          </label>
          <textarea
            id="name"
            rows={5}
            placeholder="Enter your problem"
            className="w-full px-2 py-2 text-[#36485C] lg:text-[18px]"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-600 w-full py-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShareProblems;
