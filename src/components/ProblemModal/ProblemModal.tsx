import React, { Dispatch, SetStateAction } from "react";
import { FaPlus } from "react-icons/fa6";

const ProblemModal = ({
  setId,
}: {
  setId: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div
      className={`fixed  top-20 left-20 right-20 h-3/4 bg-white flex flex-col sm:flex-row py-5 pl-5 gap-5 rounded-2xl shadow-[10px_50px_300px_20px_rgba(1,1,1,1)] text-lg font-semibold`}
    >
      <FaPlus
        className="text-4xl cursor-pointer text-white rotate-45 rounded-full bg-red-600 absolute top-0 left-0"
        onClick={() => {
          setId(-1);
        }}
      />
      <div className="w-1/2 flex flex-col gap-5 mt-10 ">
        <h1 className="text-2xl font-bold">Max Holland</h1>

        <p className="text-sm max-w-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          voluptatum, tempora libero cumque animi numquam laboriosam ea sed
          corrupti delectus quisquam et autem debitis fugit! Ipsa ea eaque
          dolorem nisi?
        </p>
      </div>
      <div className="w-1/2 overflow-y-scroll px-5 flex flex-col gap-10">
        <h1 className="text-3xl font-thin">Contribute your understandings !</h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Write your answer"
            className="w-full"
          />
          <button className="bg-blue-500">Send</button>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex justify-between">
              <h3>Max Holland</h3>
              <h5>16:21</h5>
            </div>
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              repellat eius dicta quisquam qui soluta commodi cum
            </p>
          </div>
          <div>
            <div className="flex justify-between">
              <h1>Max Holland</h1>
              <h5>16:21</h5>
            </div>
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              repellat eius dicta quisquam qui soluta commodi cum
            </p>
          </div>
          <div>
            <div className="flex justify-between">
              <h1>Max Holland</h1>
              <h5>16:21</h5>
            </div>
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              repellat eius dicta quisquam qui soluta commodi cum
            </p>
          </div>
          <div>
            <div className="flex justify-between">
              <h1>Max Holland</h1>
              <h5>16:21</h5>
            </div>
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              repellat eius dicta quisquam qui soluta commodi cum
            </p>
          </div>
          <div>
            <div className="flex justify-between">
              <h1>Max Holland</h1>
              <h5>16:21</h5>
            </div>
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              repellat eius dicta quisquam qui soluta commodi cum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemModal;
