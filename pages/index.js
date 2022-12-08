import Head from "next/head";
import React from "react";
import Hero from "../components/Hero";

export const Home = () => {
  return (
    <>
      <Head>
        <title>Truck Art</title>
      </Head>
      <Hero
        heading="Pak PhotoAdventurers"
        message="A community of professional Photographers to bring farthest corners of Pakistan to nearest of sight."
      ></Hero>
    </>
  );
};
export default Home;
