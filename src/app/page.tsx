"use client";
import React from "react";
import Image from "next/image";
import pic from "../..//public/friends.webp";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <div className="min-h-screen flex flex-col justify-between px-5">
      <section className="flex justify-start py-5 border-b-2 border-gray-100">
        <div className="w-fit px-3 border-x-4 rounded-full border-blue-500">
          <h1 className="text-4xl font-extrabold text-blue-500">Buddy</h1>
        </div>
      </section>
      <section className="flex items-center">
        <div className="w-1/2 flex flex-col items-center gap-5">
          <p className="text-lg font-medium text-center">
            Have a lot of problems and tired of looking for perfect solution or
            advice. Well not to worry anymore, Buddy is here for you. You are
            not alone in such situations. There's plenty of people like you
            using Buddy to connect and help out each other. Just sign up and get
            to post any kind of problems you are having, let others give you
            advice. Also you can be a part of giving solution to others problem.
            So good luck!
          </p>
          <div className="flex gap-3 items-center">
            <h1 className="text-4xl text-blue-500 font-semibold">
              Get started
            </h1>
            <Link href={`${session ? "/all-problems" : "/auth"}`}>
              <button className="bg-blue-500 text-xl px-5 py-2">Sign Up</button>
            </Link>
          </div>
        </div>
        <Image
          src={pic}
          className="w-1/2 rounded-full"
          alt="friends"
          priority
        />
      </section>
      <footer className="rounded-lg">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Buddy™. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
