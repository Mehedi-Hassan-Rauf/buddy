"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import Error from "next/error";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const fullName = inputs.fullName;
    const email = inputs.email;
    const password = inputs.password;

    if (isSignUp) {
      try {
        // const res = await signIn("credentials", {
        //   email,
        //   password,
        // });
        const response = await axios.post("/api/register", inputs);
        toast.success("Successfully signed up!");
        setIsSignUp(false);
      } catch (e: any) {
        // toast.error(error);
        toast.error(e.response.data.error);
      }
    } else {
      try {
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (res?.error === "CredentialsSignin") {
          toast.error("Wrong email or password");
          return;
        } else if (res?.error && res?.error !== "CredentialsSignin") {
          toast.error(res?.error);
          return;
        }
      } catch (error) {
        toast.error("Something went wrong try again");
        return;
      }
      toast.success("Sign In Successfully");
      router.push("/all-problems");
    }
    setInputs({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full sm:w-2/5 h-full flex flex-col items-center justify-center gap-20 mx-auto">
      <Link href={"/"}>
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          {isSignUp ? "Sign Up" : "Log In"}{" "}
          <span className="text-blue-500"> Buddy</span>
        </h1>
      </Link>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {isSignUp && (
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
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
            placeholder="Enter your email"
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
