"use client";
import { signOut } from "next-auth/react";
import { IoMdMenu } from "react-icons/io";

import Link from "next/link";
import React, { useState } from "react";
const Sidebar = () => {
  const [isNav, setIsNav] = useState(false);
  return (
    <>
      {!isNav ? (
        <IoMdMenu
          onClick={() => {
            setIsNav((prev) => !prev);
          }}
          className="text-4xl cursor-pointer rounded-lg sm:hidden fixed top-5 left-2 bg-blue-500 text-white"
        />
      ) : (
        <nav
          className={`flex sm:hidden flex-col bg-white p-5 justify-between absolute top-0 left-0 w-full h-screen`}
        >
          <div className="w-fit px-3 border-x-4 rounded-full border-blue-500">
            <h1 className="text-4xl font-extrabold text-blue-500">Buddy</h1>
          </div>
          <div className="w-full bg-white">
            <ul className="flex flex-col gap-4">
              <Link href={"/all-problems"}>
                <li
                  onClick={() => {
                    setIsNav(false);
                  }}
                  className="text-2xl sm:text-lg text-center sm:text-start hover:bg-gray-700 py-3"
                >
                  All Problems
                </li>
                <hr />
              </Link>
              <Link href={"/ranking"}>
                <li
                  onClick={() => {
                    setIsNav(false);
                  }}
                  className="text-2xl sm:text-lg text-center sm:text-start hover:bg-gray-700 py-3"
                >
                  Ranking
                </li>
                <hr />
              </Link>
              <Link href={"/share-problem"}>
                <li
                  onClick={() => {
                    setIsNav(false);
                  }}
                  className="text-2xl sm:text-lg text-center sm:text-start hover:bg-gray-700 py-3"
                >
                  Share Problem
                </li>
                <hr />
              </Link>
              <Link href={"/your-contributions"}>
                <li
                  onClick={() => {
                    setIsNav(false);
                  }}
                  className="text-2xl sm:text-lg text-center sm:text-start hover:bg-gray-700 py-3"
                >
                  Your Contributions
                </li>
                <hr />
              </Link>
            </ul>
          </div>
          <div className="">
            <button
              className="bg-blue-500"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        </nav>
      )}
      {/* Desktop navbar */}

      <nav
        className={`hidden sm:flex flex-col bg-white p-5 justify-between fixed top-0 left-0 w-3/12 h-screen`}
      >
        <div className="w-fit px-3 border-x-4 rounded-full border-blue-500">
          <h1 className="text-4xl font-extrabold text-blue-500">Buddy</h1>
        </div>
        <div className="w-full bg-white">
          <ul className="flex flex-col gap-4">
            <Link href={"/all-problems"}>
              <li className="text-2xl sm:text-lg text-center sm:text-start hover:bg-gray-700 py-3">
                All Problems
              </li>
              <hr />
            </Link>
            <Link href={"/all-contributions"}>
              <li className="text-2xl sm:text-lg text-center sm:text-start hover:bg-gray-700 py-3">
                All Contributions
              </li>
              <hr />
            </Link>
            <Link href={"/share-problem"}>
              <li className="text-2xl sm:text-lg text-center sm:text-start hover:bg-gray-700 py-3">
                Share Problem
              </li>
              <hr />
            </Link>
            <Link href={"/your-history"}>
              <li className="text-2xl sm:text-lg text-center sm:text-start hover:bg-gray-700 py-3">
                Your History
              </li>
              <hr />
            </Link>
          </ul>
        </div>
        <div className="">
          <button
            className="bg-blue-500"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
