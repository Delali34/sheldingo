"use client";
import React, { useEffect } from "react";
import { preLoaderAnim } from "./index";

function LoadingScreen() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="bg-[#ff0049] preloader overflow-hidden fixed right-0 left-0 bottom-0  z-50  h-[100vh] w-full flex justify-center items-center">
      <div className="font-bold flex justify-center  gap-5  overflow-hidden texts-container ">
        <span className="bg-[#200025] p-3 text-[#ff0049]">KWADWO</span>
        <span className="bg-[#200025] p-3 text-[#ff0049]">SHELDON</span>
        <span className="bg-[#200025] p-3 text-[#ff0049]">STUDIOS</span>
      </div>
    </div>
  );
}

export default LoadingScreen;
