import Link from "next/link";
import React from "react";

export const Hero = ({ heading, message }) => {
  return (
    <div className=" flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]"></div>
      <div className=" text-white p-5 z-[2] mx-auto  mt-[-10rem]">
        <h2 className=" text-5xl font-bold">{heading}</h2>
        <p className=" text-xl py-5">{message}</p>
        <Link href="/contact">
          <button className=" px-6 py-2 border">Contact</button>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
