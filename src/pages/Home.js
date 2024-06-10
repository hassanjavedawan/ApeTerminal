/** @format */

import React from "react";
import Hero from "../component/elements/Hero";
import Section1 from "../component/elements/Section1";
import Section2 from "../component/elements/Section2";
import Section3 from "../component/elements/Section3";
import Section4 from "../component/elements/Section4";
import TextSection from "../component/elements/TextSection";
import CTA from "../component/elements/CTA";

const Home = () => {
  return (
    <main className='flex flex-col gap-[4px] lg:gap-xs'>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <TextSection />
      <CTA />
    </main>
  );
};

export default Home;
