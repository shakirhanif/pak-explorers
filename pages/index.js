import Head from "next/head";
import React from "react";
import Hero from "../components/Hero";

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
      <p className=" text-8xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi quia
        quibusdam molestiae perferendis? Saepe error nobis dolores corporis rem
        asperiores nihil nemo deleniti, sequi modi consectetur at officiis
        quasi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quae
        suscipit deserunt sit nemo excepturi odit expedita modi nobis dolores
        tempora itaque architecto quasi maiores veritatis voluptas autem at
        sequi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ad
        tempore earum corporis officiis quaerat? Reprehenderit non, atque amet
        animi alias nam aliquid, enim omnis veritatis obcaecati exercitationem
        corporis. Nemo.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe
        voluptatum consectetur animi excepturi iure voluptates culpa laborum. A
        beatae laboriosam neque ea optio quidem, quos maxime rem sed recusandae.
      </p>
    </>
  );
};
export default Home;
