import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navebar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("white");
        setTextColor("black");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className=" fixed left-0 top-0 w-full z-[10] ease-in duration-300"
    >
      <div className="text-white max-w-[1240px] m-auto flex justify-between items-center p-4">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className=" font-bold text-2xl">
            Pak-PhotoAdventurers
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className=" p-4">
            <Link href="/">
              <h1>Home</h1>
            </Link>
          </li>
          <li className=" p-4">
            <Link href="/#gallery">
              <h1>Gallery</h1>
            </Link>
          </li>
          <li className=" p-4">
            <Link href="/work">
              <h1>Work</h1>
            </Link>
          </li>
          <li className=" p-4">
            <Link href="/contact">
              <h1>Contact</h1>
            </Link>
          </li>
        </ul>

        <div className=" block sm:hidden z-[10]">
          {nav ? (
            <button onClick={() => setNav(!nav)}>
              <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
            </button>
          ) : (
            <button onClick={() => setNav(!nav)}>
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            </button>
          )}
        </div>
        <div
          style={{
            backgroundColor: `${color === "transparent" ? "black" : color}`,
            color: `${textColor}`,
          }}
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className=" p-4 text-xl hover:text-gray-500">
              <Link href="/">
                <h1>Home</h1>
              </Link>
            </li>
            <li className=" p-4 text-xl hover:text-gray-500">
              <Link href="/#gallery">
                <h1>Gallery</h1>
              </Link>
            </li>
            <li className=" p-4 text-xl hover:text-gray-500">
              <Link href="/work">
                <h1>Work</h1>
              </Link>
            </li>
            <li className=" p-4 text-xl hover:text-gray-500">
              <Link href="/contact">
                <h1>Contact</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
