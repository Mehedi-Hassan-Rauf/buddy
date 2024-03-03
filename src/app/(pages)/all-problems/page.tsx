"use client";
import Problem from "@/components/Problem/Problem";
import ProblemModal from "@/components/ProblemModal/ProblemModal";
import React, { useState } from "react";
import { FaCrown, FaPlus } from "react-icons/fa6";
// import { MdArrowBackIos } from "react-icons/md";

const list = [
  {
    name: "Max",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        quisquam ipsa delectus, accusamus, cumque repellat quo itaque sunt
        molestias perspiciatis`,
  },
  {
    name: "Max",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        quisquam ipsa delectus, accusamus, cumque repellat quo itaque sunt
        molestias perspiciatis`,
  },
  {
    name: "Max",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        quisquam ipsa delectus, accusamus, cumque repellat quo itaque sunt
        molestias perspiciatis`,
  },
  {
    name: "Max",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        quisquam ipsa delectus, accusamus, cumque repellat quo itaque sunt
        molestias perspiciatis`,
  },
  {
    name: "Max",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        quisquam ipsa delectus, accusamus, cumque repellat quo itaque sunt
        molestias perspiciatis`,
  },
  {
    name: "Max",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        quisquam ipsa delectus, accusamus, cumque repellat quo itaque sunt
        molestias perspiciatis`,
  },
  {
    name: "Max",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        quisquam ipsa delectus, accusamus, cumque repellat quo itaque sunt
        molestias perspiciatis`,
  },
  {
    name: "Max",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        quisquam ipsa delectus, accusamus, cumque repellat quo itaque sunt
        molestias perspiciatis`,
  },
  {
    name: "Max",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        quisquam ipsa delectus, accusamus, cumque repellat quo itaque sunt
        molestias perspiciatis`,
  },
  {
    name: "Max",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        quisquam ipsa delectus, accusamus, cumque repellat quo itaque sunt
        molestias perspiciatis`,
  },
];

const AllProblems = () => {
  const [id, setId] = useState(-1);
  const winner = 0;
  return (
    <div className="w-9/12 mr-10 flex flex-col gap-20">
      <h1 className="text-4xl text-center">Problems</h1>
      <div className="grid grid-cols-4 gap-5">
        {list.map((item, index) => {
          return (
            <Problem
              key={index}
              index={index}
              setId={setId}
              name={item.name}
              des={item.des}
            />
          );
        })}
      </div>
      {id >= 0 && <ProblemModal setId={setId} />}
    </div>
  );
};

export default AllProblems;
