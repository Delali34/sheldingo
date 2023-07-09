"use client";
import React from "react";
import { staggerContainer } from "./motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components/Customtext";
import { XploreCard } from "../components/ExploreCard";

import { details } from "./template";

function Explore() {
  const [active, setActive] = useState("world-3");
  const activeDetail = details.find((detail) => detail.id === active);

  const sectionStyle = {
    backgroundColor: active !== "world-2" ? activeDetail?.color : "#9BFF00",
  };
  return (
    <section className="bg-[#200025] pb-14" id="shows" style={sectionStyle}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="SHOWS" />
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 justify-center max-w-[1800px] mx-auto px-16 font-fonttext "
      >
        {details.map((world, index) => (
          <XploreCard
            key={world.id}
            {...world}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Explore;
