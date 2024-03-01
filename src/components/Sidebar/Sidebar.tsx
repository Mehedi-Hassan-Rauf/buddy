import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <nav className="flex flex-col justify-between fixed top-0 left-10 sm:w-2/12 h-screen">
      <div className="pt-4 flex gap-2 justify-center">
        <h1>Questionnaire</h1>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          <Link href={"/all-problems"}>
            <li className="text-lg  hover:bg-gray-700 py-3">All Problems</li>
            <hr />
          </Link>
          <Link href={"/ranking"}>
            <li className="text-lg  hover:bg-gray-700 py-3">Ranking</li>
            <hr />
          </Link>
          <Link href={"/share-problem"}>
            <li className="text-lg  hover:bg-gray-700 py-3">Share Problem</li>
            <hr />
          </Link>
          <Link href={"/your-contributions"}>
            <li className="text-lg  hover:bg-gray-700 py-3">
              Your Contributions
            </li>
            <hr />
          </Link>
        </ul>
      </div>
      <div className="py-4">
        <button>Sign Out</button>
      </div>
    </nav>
  );
};

export default Sidebar;
