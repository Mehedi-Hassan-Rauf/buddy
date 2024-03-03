import React from "react";

const ShareProblems = () => {
  return (
    <div className="w-9/12 mr-10 flex flex-col gap-10">
      <header className="flex flex-col gap-2 mt-5">
        <h1 className="text-4xl text-center">Share your problem freely!</h1>
        <h2 className="text-center">
          Anyone from this community will answer with probable solution
        </h2>
      </header>
      <form action="" method="POST" className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-[#36485C] lg:text-[18px]">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-2 py-2 text-[#36485C] lg:text-[18px]"
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
