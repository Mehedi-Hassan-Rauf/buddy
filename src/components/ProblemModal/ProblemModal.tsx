import axios from "axios";
import { useSession } from "next-auth/react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";

const ProblemModal = ({
  id,
  setId,
}: {
  id: { name: string; des: string; _id: string };
  setId: Dispatch<SetStateAction<{ name: string; des: string; _id: string }>>;
}) => {
  const [solution, setSolution] = useState("");
  const [msgs, setMsgs] = useState([]);
  const { data: session } = useSession();
  const handleSend = async () => {
    if (solution === "") return;
    const temp = {
      solution,
      senderEmail: session?.user?.email,
      problemId: id._id,
    };
    await axios
      .post("/api/send-solution", temp)
      .then((res) => {
        toast.success("Commented");
        // console.log(res.data);
      })
      .catch((err) => {
        toast.error(err);
      });
    setSolution("");
  };

  useEffect(() => {
    const getSolutions = async () => {
      await axios
        .get(`/api/get-solution/for-problem/${id._id}`)
        .then((res) => {
          // toast.success("Commented");
          // console.log(res.data);
          setMsgs(res.data);
        })
        .catch((err) => {
          toast.error(err);
        });
    };
    getSolutions();
  });
  // console.log(msgs);
  return (
    <div
      className={`fixed top-20 left-10 sm:left-20 right-10 sm:right-20 h-3/4 bg-white flex flex-col sm:flex-row p-5 gap-5 rounded-2xl shadow-[10px_50px_300px_20px_rgba(1,1,1,1)] text-lg font-semibold`}
    >
      <FaPlus
        className="text-4xl cursor-pointer text-white rotate-45 rounded-full bg-red-600 absolute top-0 left-0"
        onClick={() => {
          setId({
            name: "",
            des: "",
            _id: "",
          });
        }}
      />
      <div className="w-full sm:w-1/2 flex flex-col gap-5 mt-10 ">
        <h1 className="text-2xl font-bold">{id.name}</h1>
        <p className="text-sm max-w-full">{id.des}</p>
      </div>
      <hr />
      <div className="w-full sm:w-1/2 overflow-y-scroll flex flex-col gap-5 sm:gap-10">
        <h1 className="w-full text-sm font-bold sm:text-3xl sm:font-thin">
          Contribute your understandings !
        </h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Write your answer"
            className="w-full"
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
          />
          <button onClick={handleSend} className="bg-blue-500">
            Send
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {msgs?.map(
            (
              msg: { senderId: ""; senderName: string; solution: string },
              i
            ) => {
              console.log(msg);
              console.log(session?.user?.image);
              return (
                <div
                  key={i}
                  className={`${
                    msg.senderId === session?.user?.image && "bg-gray-200"
                  }`}
                >
                  <div className={`flex justify-between`}>
                    <h3>{msg.senderName}</h3>
                    <h5>16:21</h5>
                  </div>
                  <p className="text-base font-light">{msg.solution}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemModal;
