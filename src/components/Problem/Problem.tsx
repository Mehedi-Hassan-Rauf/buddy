import React, { Dispatch, SetStateAction } from "react";
import { BiSolidMessageDetail } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";

const Problem = ({
  index,
  name,
  des,
  setId,
  _id,
}: {
  index: number;
  name: string;
  des: string;
  setId: Dispatch<SetStateAction<{ name: string; des: string; _id: string }>>;
  _id: string;
}) => {
  return (
    <div
      className={`w-fit h-fit flex flex-col p-5 gap-3 bg-white rounded-xl shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] text-lg font-semibold`}
    >
      <div className="w-full overflow-hidden h-fit flex  items-end justify-between gap-2">
        <h1 className="">{name}</h1>
        <div className="flex">
          <BiSolidMessageDetail
            className="text-2xl cursor-pointer text-blue-500"
            onClick={() => {
              const temp = {
                name: name,
                des: des,
                _id: _id,
              };
              setId(temp);
            }}
          />
          <GoDotFill className=" text-blue-500 ml-[-8px] mt-[-8px]" />
        </div>
      </div>
      <p className="text-sm font-normal">{des}</p>
    </div>
  );
};

export default Problem;
