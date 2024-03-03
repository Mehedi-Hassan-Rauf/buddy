"use client";
import ProblemModal from "@/components/ProblemModal/ProblemModal";
import React, { use, useState } from "react";

const list1 = [
  { day: "01/05/2021", time: "12:16" },
  { day: "01/05/2021", time: "12:16" },
  { day: "01/05/2021", time: "12:16" },
  { day: "01/05/2021", time: "12:16" },
  { day: "01/05/2021", time: "12:16" },
  { day: "01/05/2021", time: "12:16" },
  { day: "01/05/2021", time: "12:16" },
  { day: "01/05/2021", time: "12:16" },
  { day: "01/05/2021", time: "12:16" },
  { day: "01/05/2021", time: "12:16" },
];

const YourContributions = () => {
  const [isProblems, setIsProblems] = useState(true);
  const [id, setId] = useState(-1);
  return (
    <div className="w-9/12 flex flex-col gap-20 mr-10">
      <h1 className=" text-4xl text-center mt-5">Your Contributions</h1>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <div className="w-full flex justify-start gap-2 ">
          <button
            className={`${isProblems ? "bg-blue-500" : "bg-blue-300"} `}
            onClick={() => setIsProblems(true)}
          >
            Problems
          </button>
          <button
            className={`${!isProblems ? "bg-blue-500" : "bg-blue-300"} `}
            onClick={() => setIsProblems(false)}
          >
            Solutions
          </button>
        </div>
        <div className="w-full flex flex-col gap-10">
          <h2 className="ml-10 text-lg font-semibold">
            {isProblems
              ? "Problems you have posted"
              : "Solutions you have given"}{" "}
            so far
          </h2>
          <ul className="w-full flex flex-col gap-5">
            {isProblems ? (
              list1.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center bg-gray-200 justify-around py-2"
                  >
                    <span>{index + 1})</span>
                    <p className="text-sm">{item.day}</p>
                    <p className="text-sm">{item.time}</p>
                    <button
                      className="bg-blue-500"
                      onClick={() => {
                        setId(index);
                      }}
                    >
                      View
                    </button>
                    {/* <hr /> */}
                  </li>
                );
              })
            ) : (
              <h1>Solutions</h1>
            )}
          </ul>
          {id >= 0 && <ProblemModal setId={setId} />}
        </div>
      </div>
    </div>
  );
};

export default YourContributions;
