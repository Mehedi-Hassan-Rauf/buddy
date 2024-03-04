"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  const [dataa, setDataa] = useState(session);
  //   useEffect(() => {
  //     setDataa(session);
  //   }, [session]);
  console.log(session?.user);
  return <div>hello</div>;
};

export default Home;
