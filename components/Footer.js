"use client";

import React from "react";
import { motion } from "framer-motion";
import { footerVariants } from "../components/motion";

function Footer() {
  return (
    <div className="bg-[#ffa400]" id="contact">
      {" "}
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className="py-8 relative px-10"
      >
        <div className="max-w-[1800px] mx-auto flex flex-col gap-8">
          <div className="flex items-center justify-between flex-wrap gap-5 text-white">
            <h4 className="font-bold md:text-[44px] font-fonttext text-[24px]">
              CREATING CONTENT PEOPLE WANT
            </h4>
            <button
              type="button"
              className="flex items-center py-4 px-6 bg-[#ff003a] rounded-[32px] gap-[12px]"
            >
              <h1>SUBSCRIBE ON YOUTUBE</h1>
            </button>
          </div>
          <div className="flex flex-col ">
            <div className="mb-[50px] h-[2px] bg-white "></div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h4 className="font-extrabold text-[20px] text-white">
                KWADWO SHELDON STUDIOS
              </h4>
              <p className="font-normal text-white text-[14px] ">
                Copyright Ⓒ 2023 kwadwo sheldon studios. All rights reserved.
              </p>
              <p className="font-semibold text-white text-[18px] ">
                Email:booksheldon7@gmail.com Call: (+233) 050 113 8114
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
