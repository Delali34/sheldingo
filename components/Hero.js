"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "./motion";

function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-[1800px] mx-auto absolute top-0 left-0 right-0 mt-[250px]"
    >
      <div className="">
        <div className="flex sm:justify-center lg:justify-start  items-center p-10">
          <motion.h1
            variants={textVariant(6.1)}
            className="text-[#fff] font-extrabold 2xl:text-[250px]  xl:text-[150px] sm:text-[120px] text-[80px] pb-5 font-fonttext"
          >
            K<span className="">W</span>A
            <span className="text-[#ff0049]">DWO</span>
          </motion.h1>
          <motion.h1
            variants={textVariant(6.2)}
            className="2xl:text-[45px] xl:text-[30px] text-[10px] text-[#000] -mt-14 sm:p-2 p-1 rounded-full border-4 bg-white border-[#FFF]"
          >
            TM
          </motion.h1>
        </div>
        <div className="lg:pl-12 lg:flex justify-left items-center -mt-20 ">
          <motion.div
            variants={textVariant(6.1)}
            className="bg-white  flex sm:justify-center pl-5 lg:pl-0"
          >
            {" "}
            <motion.h1 className="2xl:text-[150px]  text-[#200025] sm:text-[120px] text-[90px] px-4 text-center font-fonttext font-extrabold">
              SHELDON
            </motion.h1>
          </motion.div>
          <motion.div
            variants={textVariant(6.5)}
            class="scrolling-text bg-[#ffa300] font-fonttext font-extrabold"
          >
            <span className="  2xl:text-[150px] sm:text-[120px] text-[90px] text-[#ffF] text-item">
              STUDIOS - HOUSE OF CONTENT
            </span>
            <span className="  2xl:text-[150px] sm:text-[120px] text-[90px] text-[#fff] text-item">
              STUDIOS - HOUSE OF CONTENT
            </span>
            <span className=" 2xl:text-[150px] sm:text-[120px] text-[90px] text-[#fff] text-item">
              STUDIOS - HOUSE OF CONTENT
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
