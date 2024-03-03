import React, { Dispatch, SetStateAction } from "react";
import { FaMessage } from "react-icons/fa6";

const Problem = ({
  index,
  name,
  des,
  setId,
}: {
  index: number;
  name: string;
  des: string;
  setId: Dispatch<SetStateAction<number>>;
}) => {
  const winner = 0;
  return (
    <div
      className={`w-fit h-fit flex flex-col p-2 gap-5 bg-white rounded-xl shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] text-lg font-semibold`}
    >
      <h1 className="">Name</h1>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        quisquam ipsa delectus, accusamus, cumque repellat quo itaque sunt
        molestias perspiciatis
      </p>
      <div className="w-full h-fit flex items-center justify-end gap-2">
        <FaMessage
          className="text-2xl cursor-pointer"
          onClick={() => {
            setId(index);
          }}
        />
      </div>
    </div>
  );
};

export default Problem;
