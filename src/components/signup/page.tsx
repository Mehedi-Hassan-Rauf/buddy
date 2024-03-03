"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const fullName = inputs.fullName;
    const email = inputs.email;
    const password = inputs.password;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        console.log("Invalid Credentials");
        return;
      }

      router.replace("/all-problems");
    } catch (error) {
      console.log(error);
    }
  };

  if (session) {
    router.replace("/all-problems");
    return null;
  }

  return (
    <div className="w-full sm:w-2/5 h-full flex flex-col items-center justify-center gap-20 mx-auto">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        {isSignUp ? "Sign Up" : "Log In"}{" "}
        <span className="text-blue-500"> Buddy</span>
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {isSignUp && (
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered px-2 h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
        )}

        <div>
          <label className="label p-2 ">
            <span className="text-base label-text">Email</span>
          </label>
          <input
            type="text"
            className="w-full input input-bordered px-2 h-10"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full input input-bordered px-2 h-10"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          <p
            className="text-sm hover:underline cursor-pointer hover:text-blue-600 mt-2 inline-block"
            onClick={() => {
              setIsSignUp((prev) => !prev);
            }}
          >
            Already have an account?
          </p>
        </div>

        <div>
          <button className="mt-2 bg-blue-500">
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
