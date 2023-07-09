"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../components/motion";
function Services() {
  return (
    <section className="bg-[#1A232E] overflow-hidden " id="services">
      {" "}
      <div className="relative z-10 pt-20 px-10 pb-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-[1800px] mx-auto flex flex-col lg:flex-row gap-6"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col sm:p8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative "
          >
            <div className="feedback-gradient" />
            <div>
              <h4 className="font-fonttext font-bold sm-text-[32px] lg:text-[45px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
                Services
              </h4>
              <p className="mt-[10px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
                We have services that cater for our clients need.
              </p>
              <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
                We create an environment for your brand to be noticed. We speak
                the digital language about the product or business you want to
                put across on Social Media.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="relative flex-1 flex justify-center items-center "
          >
            <Image
              className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
              src="/him.jpg"
              width={1500}
              height={1000}
              alt=""
            />
            <motion.div
              variants={zoomIn(0.4, 1)}
              className="lg:block hidden absolute -left-[5%] top-[3%] image-rotator"
            >
              <Image
                src="/shape.png"
                width={400}
                height={400}
                alt=""
                className="w-[155px] h-[155px] object-contain"
              />
            </motion.div>
            <motion.div
              variants={zoomIn(0.4, 1)}
              className="lg:hidden block absolute -left-[1%] -top-[15%] image-rotator"
            >
              <Image
                src="/shape.png"
                width={400}
                height={400}
                alt=""
                className="lg:w-[155px] lg:h-[155px] w-[85px] h-[85px] object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
