"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

function Socials() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="bg-[#ffa400]">
      <div className="wrap max-w-[1800px] mx-auto md:h-[80vh] pt-20 pb-5 lg:pt-0 h-[100%] lg:h-[50vh]">
        <div className="wrapper font-fonttext grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div>
            {" "}
            <div className="icons facebook">
              <div className="tooltip">
                <h1>Facebook</h1>
              </div>
              <span className="mt-3">
                <FaFacebookF className="text-[45px] " />
              </span>
            </div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              // onExit={() => setCounterOn(false)}
            >
              {" "}
              <h1 className="text-center text-[45px] text-white">
                {counterOn && (
                  <CountUp start={0} end={500} duration={1} delay={0} />
                )}
                K+
              </h1>
            </ScrollTrigger>
          </div>
          <div>
            {" "}
            <div className="icons instagram">
              <div className="tooltip">
                <h1>Instagram</h1>
              </div>
              <span className="mt-3">
                <FaInstagram className="text-[45px]" />
              </span>
            </div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              // onExit={() => setCounterOn(false)}
            >
              {" "}
              <h1 className="text-center text-[45px] text-white">
                {counterOn && (
                  <CountUp start={0} end={1} duration={2} delay={1} />
                )}
                M+
              </h1>
            </ScrollTrigger>
          </div>
          <div>
            <div className="icons twitter">
              <div className="tooltip">
                <h1>Twitter</h1>
              </div>
              <span className="mt-3">
                <FaTwitter className="text-[45px]" />
              </span>
            </div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              // onExit={() => setCounterOn(false)}
            >
              {" "}
              <h1 className="text-center text-[45px] text-white">
                {counterOn && (
                  <CountUp start={0} end={1} duration={2} delay={1} />
                )}
                M+
              </h1>
            </ScrollTrigger>
          </div>
          <div>
            <div className="icons tiktok">
              <div className="tooltip">
                <h1>Tiktok</h1>
              </div>
              <span className="mt-3">
                <FaTiktok className="text-[45px]" />
              </span>
            </div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              // onExit={() => setCounterOn(false)}
            >
              {" "}
              <h1 className="text-center text-[45px] text-white">
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={1.5} />
                )}
                K+
              </h1>
            </ScrollTrigger>
          </div>
          <div>
            {" "}
            <div className="icons youtube">
              <div className="tooltip ">
                <h1>Youtube</h1>
              </div>
              <span className="mt-3 ">
                <FaYoutube className="text-[45px]" />
              </span>
            </div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              // onExit={() => setCounterOn(false)}
            >
              {" "}
              <h1 className="text-center text-[45px] text-white">
                {counterOn && (
                  <CountUp start={0} end={470} duration={2} delay={2} />
                )}
                K+
              </h1>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
