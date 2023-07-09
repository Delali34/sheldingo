"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants, fadeIn } from "./motion";
import { FaHeadset } from "react-icons/fa6";
import Link from "next/link";

export const XploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  color,
  handleClick,
  link,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
    style={{ backgroundColor: active === id ? color : "" }}
  >
    <Image
      src={imgUrl}
      width={1000}
      height={720}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-bold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] ">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start items-center w-full  bg-black/60 flex-col rounded-[24px]">
        <Link href={link} target="_blank">
          <div className="flex justify-center w-[80px] h-[80px] items-center bg-white/30 rounded-[24px]">
            <FaHeadset className="w-1/2 h-1/2 object-contain text-white" />
          </div>

          <p className="font-normal lg:block hidden text-[22px] mt-5 leading-[20px] text-white font-fonttext">
            Click to Watch
          </p>
          <p className="font-normal lg:hidden  text-[22px] mt-5 leading-[20px] text-white font-fonttext">
            Tap to Watch
          </p>
        </Link>

        <h2 className="font-fonttext mt-10 font-bold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);
