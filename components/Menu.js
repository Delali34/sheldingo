"use client";
import React from "react";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

function Menu({ showMenu, active }) {
  return (
    <div>
      <div
        className={
          active
            ? "md:hidden flex-col flex fixed inset-0 z-10 bottom-1/2 bg-[#ff0040] backdrop-blur-lg gap-5 font-fonttext "
            : "hidden"
        }
      >
        <AiOutlineClose
          className="text-5xl text-white p-[10px] border-b-[1px] border-r-[1px] border-[#ffa300]"
          onClick={showMenu}
        />
        <hr className="-mt-[20.5px] border-[#ffa300]" />
        <Link href="/#shows">
          <div>
            <h1
              className="cursor-pointer text-white pl-11 font-semibold text-3xl"
              onClick={showMenu}
            >
              Shows
            </h1>
            <hr className=" border-[#ffa300]" />
          </div>
        </Link>
        <Link href="#sponsors">
          <div>
            <h1
              className="cursor-pointer text-white pl-11 font-semibold text-3xl"
              onClick={showMenu}
            >
              Sponsors
            </h1>
            <hr className=" border-[#ffa300]" />
          </div>
        </Link>
        <Link href="#services">
          <div>
            <h1
              className="cursor-pointer text-white pl-11 font-semibold text-3xl"
              onClick={showMenu}
            >
              Services
            </h1>
            <hr className=" border-[#ffa300]" />
          </div>
        </Link>
        <Link href="#contact">
          <div>
            <h1
              className="cursor-pointer text-white pl-11 font-semibold text-3xl"
              onClick={showMenu}
            >
              Contact
            </h1>
            <hr className=" border-[#ffa300]" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
