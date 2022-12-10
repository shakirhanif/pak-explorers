import Head from "next/head";
import React from "react";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";
import slidedata from "../utils/slidedata";

export const Home = () => {
  return (
    <>
      <Head>
        <title>Pak PhotoAdveturers</title>
      </Head>
      <Hero
        heading="Pak PhotoAdventurers"
        message="A community of professional Photographers to bring farthest corners of Pakistan to nearest of sight."
      ></Hero>
      <Slider slides={slidedata}></Slider>
      <Instagram></Instagram>
    </>
  );
};
export default Home;
