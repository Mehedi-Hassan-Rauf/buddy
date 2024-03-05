"use client";
import Problem from "@/components/Problem/Problem";
import ProblemModal from "@/components/ProblemModal/ProblemModal";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AllProblems = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState({
    name: "",
    des: "",
    _id: "",
  });
  const [list, setList] = useState([]);
  useEffect(() => {
    setLoading(true);
    const getProblems = async () => {
      await axios
        .get("/api/get-problem")

        .then((res) => {
          setList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    };
    getProblems();
  }, []);
  return (
    <div className="w-11/12 sm:w-9/12 px-5 flex flex-col gap-20">
      <h1 className="text-4xl text-center mt-5">Problems</h1>
      <div className="flex flex-col gap-5 w-full h-full">
        {loading ? (
          <h1 className="text-2xl w-full pt-10 flex items-center justify-center">
            Loading....
          </h1>
        ) : (
          list.map(
            (
              item: { name: string; des: string; _id: string },
              index: number
            ) => {
              return (
                <Problem
                  key={index}
                  index={index}
                  setId={setId}
                  _id={item._id}
                  name={item.name}
                  des={item.des}
                />
              );
            }
          )
        )}
      </div>
      {id.name !== "" && <ProblemModal id={id} setId={setId} />}
    </div>
  );
};

export default AllProblems;
