"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Ranking = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      await axios
        .get(`/api/get-user`)
        .then((res) => {
          setUsers(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    };
    getUsers();
  }, []);

  return (
    <div className="w-11/12 sm:w-9/12 px-5 flex flex-col gap-20">
      <h1 className="text-4xl text-center mt-5">List Of Contributers</h1>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex justify-around">
          <h1 className="w-1/3 text-center text-xl font-semibold">Name</h1>
          <p className="w-1/3 text-center  text-xl font-semibold">
            Given Solutions
          </p>
          <p className="w-1/3 text-center text-xl font-semibold">
            Posted Problems
          </p>
        </div>
        {loading ? (
          <h1 className="text-2xl w-full pt-10 flex items-center justify-center">
            Loading....
          </h1>
        ) : (
          users.map((user: { _id: string; fullName: string }, i) => {
            return <UsersList key={i} user={user} />;
          })
        )}
      </div>
    </div>
  );
};

const UsersList = ({ user }: { user: { _id: string; fullName: string } }) => {
  const [problemCount, setProblemCount] = useState(0);
  const [solutionCount, setSolutionCount] = useState(0);
  const getProblems = async () => {
    await axios
      .get(`/api/get-problem/posted-by-user/${user._id}`)
      .then((res) => {
        setProblemCount(res.data.length);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getSolutions = async () => {
    await axios
      .get(`/api/get-solution/for-user/${user._id}`)
      .then((res) => {
        setSolutionCount(res.data.length);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSolutions();
    getProblems();
  });
  return (
    <div className="w-full flex justify-around">
      <h1 className="w-1/3 text-center h-fit">{user.fullName}</h1>
      <p className="w-1/3 text-center">{solutionCount}</p>
      <p className="w-1/3 text-center"> {problemCount}</p>
    </div>
  );
};

export default Ranking;
