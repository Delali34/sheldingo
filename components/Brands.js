"use client";
import React from "react";
import { staggerContainer, fadeIn, planetVariants } from "./motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components/Customtext";
import { XploreCard } from "../components/ExploreCard";
import Logos from "../components/Logos";

function Brands() {
  return (
    <div className="bg-[#200025]">
      {" "}
      <div className="max-w-[1800px] mx-auto px-10">
        <motion.div
          className=""
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div variants={planetVariants("left")}>
            <h1 className="font-fonttext sm:text-[96px] text-[84px] font-bold text-white">
              SPONSORS
            </h1>
          </motion.div>
          <motion.div>
            <h1 className="text-white text-[24px] -mt-5 pb-5">
              Transform your brand by making it visible to the masses
            </h1>
          </motion.div>
        </motion.div>
      </div>
      <hr className="w-full h-1" />
    </div>
  );
}

export default Brands;
