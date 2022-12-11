import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import slider1 from "../public/slider-photos/slider1.jpg";
import slider2 from "../public/slider-photos/slider2.jpg";
import slider3 from "../public/slider-photos/slider3.jpg";
import slider4 from "../public/slider-photos/slider4.jpg";
import slider5 from "../public/slider-photos/slider5.jpg";
import slider6 from "../public/slider-photos/slider6.jpg";
import slider7 from "../public/slider-photos/slider7.jpg";
import slider8 from "../public/slider-photos/slider8.jpg";

export const Slider = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
  ];
  const length = slides.length;

  return (
    <div id="gallery" className=" max-w-[1240px] mx-auto">
      <h1 className=" text-2xl font-bold text-center p-4">Gallery</h1>
      <div>
        <div className=" relative flex justify-center p-4">
          {slides.map((x, index) => (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={() =>
                  setCurrent(current === 0 ? length - 1 : current - 1)
                }
                className=" absolute top-[50%] left-[30px] z-[2] text-white text-white/70 cursor-pointer select-none"
                size={50}
              ></FaArrowCircleLeft>
              {index === current ? (
                <Image src={x} alt="image" width={1440} height={600} cover />
              ) : null}
              <FaArrowCircleRight
                onClick={() =>
                  setCurrent(current === length - 1 ? 0 : current + 1)
                }
                className=" absolute top-[50%] right-[30px] z-[2] text-white text-white/70 cursor-pointer select-none"
                size={50}
              ></FaArrowCircleRight>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
