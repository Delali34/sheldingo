"use client";
import { textContainer, textVariant2 } from "./motion";

import { motion } from "framer-motion";
export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className="font-bold text-[96px] font-fonttext text-center text-white"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === "" ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
export const TitleText = ({ title, textStyles }) => <h2>Title Text</h2>;
