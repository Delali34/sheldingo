"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants } from "./motion";
import { FcMenu } from "react-icons/fc";
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from "@/components/Menu";
import Hero from "./Hero";
import Link from "next/link";

function Mainpage() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className=" h-[100vh] w-full">
      <div className="">
        {" "}
        <Image
          priority
          className="w-full h-[100vh] object-cover relative"
          src="/him.jpg"
          width={1500}
          height={1000}
          alt=""
        />
        <div className="bg-black/50 inset-0 absolute top-0 left-0 right-0 bottom-0 w-full h-[100vh]"></div>
      </div>

      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:p-10 p-7 lg:absolute top-0 right-0 left-0 fixed z-50"
      >
        <div className="flex justify-between items-center">
          {" "}
          <Image
            className="md:w-[100px] md:h-[100px] w-[70px] h-[70px] "
            src="/Frame 1.png"
            width={100}
            height={100}
            alt=""
          />
          <div className="menu lg:hidden flex cursor-pointer">
            <div className="icon">
              <span className="text-white">
                <RxHamburgerMenu className="text-[30px] " onClick={showMenu} />
              </span>
            </div>
          </div>
          <div className="space-x-2 lg:flex hidden">
            <Link href="#shows">
              <button className="main-button hover-dot w-button">Shows</button>
            </Link>
            <Link href="#sponsors">
              <button className="main-button hover-dot w-button">
                Sponsors
              </button>
            </Link>
            <Link href="#services">
              <button className="main-button hover-dot w-button">
                Services
              </button>
            </Link>

            <Link href="#contact">
              <button className="main-button hover-dot w-button">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <Menu showMenu={showMenu} active={active} />
      </motion.div>
      <Hero />
    </div>
  );
}

export default Mainpage;
