"use client";
import ProblemModal from "@/components/ProblemModal/ProblemModal";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

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
  const [loading, setLoading] = useState(false);
  const [isProblems, setIsProblems] = useState(true);
  const [problemList, setProblemList] = useState([]);
  const [solutionList, setSolutionList] = useState([]);
  const { data: session } = useSession();
  const [id, setId] = useState({
    name: "",
    des: "",
    _id: "",
  });
  useEffect(() => {
    const userId = session?.user?.image;
    const getProblems = async () => {
      setLoading(true);
      await axios
        .get(`/api/get-problem/posted-by-user/${userId}`)
        .then((res) => {
          setProblemList(res.data);
          // console.log(res.data.createdAt);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    };
    const getSolutions = async () => {
      setLoading(true);
      await axios
        .get(`/api/get-solution/for-user/${userId}`)
        .then((res) => {
          setSolutionList(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    };
    getSolutions();
    getProblems();
  }, [session]);
  // console.log(problemList[0]);
  return (
    <div className="w-11/12 px-5 sm:w-9/12 max-h-screen flex flex-col gap-20">
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
            {loading
              ? "Loading..."
              : (isProblems &&
                  problemList.length &&
                  "Problems you have posted so far") ||
                (!isProblems &&
                  solutionList.length &&
                  "Solutions you have given so far") ||
                (isProblems &&
                  !problemList.length &&
                  " You have not posted any problems yet") ||
                (!isProblems &&
                  !solutionList.length &&
                  "You have not given any solutions yet")}
          </h2>
          <ul className="w-full flex flex-col gap-5">
            {isProblems &&
              problemList.map((item: { name: ""; des: ""; _id: "" }, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center bg-gray-200 justify-evenly py-2"
                  >
                    <span>{index + 1})</span>
                    <p className=" w-3/5 text-sm truncate">{item.des}</p>
                    <button
                      className="bg-blue-500"
                      onClick={() => {
                        setId({
                          name: item.name,
                          des: item.des,
                          _id: item._id,
                        });
                      }}
                    >
                      View
                    </button>
                  </li>
                );
              })}
            {!isProblems &&
              solutionList.map(
                (item: { problemId: ""; solution: "" }, index) => {
                  const temp = {
                    name: "",
                    des: "",
                    _id: "",
                  };
                  const getProblem = async () => {
                    await axios
                      .get(`/api/get-problem/${item.problemId}`)
                      .then((res) => {
                        temp.name = res.data.name;
                        temp.des = res.data.des;
                        temp._id = res.data._id;
                        // console.log(res.data._id);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  };
                  getProblem();
                  // console.log(item);
                  return (
                    <li
                      key={index}
                      className="flex items-center bg-gray-200 justify-around py-2"
                    >
                      <span>{index + 1})</span>
                      <p className=" w-3/5 text-sm truncate">
                        You said : {item.solution}
                      </p>
                      <button
                        className="bg-blue-500"
                        onClick={() => {
                          setId({
                            name: temp.name,
                            des: temp.des,
                            _id: temp._id,
                          });
                        }}
                      >
                        View
                      </button>
                    </li>
                  );
                }
              )}
          </ul>
          {id.name !== "" && <ProblemModal id={id} setId={setId} />}
        </div>
      </div>
    </div>
  );
};

export default YourContributions;
