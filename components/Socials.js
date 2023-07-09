import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

function Socials() {
  return (
    <div className="bg-[#ffa400]">
      <div className="wrap max-w-[1800px] mx-auto md:h-[80vh] pt-20 pb-5 lg:pt-0 h-[100%] lg:h-[50vh]">
        <div className="wrapper font-fonttext grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div className="icons facebook">
            <div className="tooltip">
              <h1>Facebook</h1>
            </div>
            <span className="mt-3">
              <FaFacebookF className="text-[45px] " />
            </span>
            <h3 className="text-[50px] text-white">500K+</h3>
          </div>
          <div className="icons instagram">
            <div className="tooltip">
              <h1>Instagram</h1>
            </div>
            <span className="mt-3">
              <FaInstagram className="text-[45px]" />
            </span>
            <h3 className="text-[50px] text-white">1M+</h3>
          </div>
          <div className="icons twitter">
            <div className="tooltip">
              <h1>Twitter</h1>
            </div>
            <span className="mt-3">
              <FaTwitter className="text-[45px]" />
            </span>
            <h3 className="text-[50px] text-white">1M+</h3>
          </div>
          <div className="icons tiktok">
            <div className="tooltip">
              <h1>Tiktok</h1>
            </div>
            <span className="mt-3">
              <FaTiktok className="text-[45px]" />
            </span>
            <h3 className="text-[50px] text-white">100K+</h3>
          </div>
          <div className="icons youtube">
            <div className="tooltip ">
              <h1>Youtube</h1>
            </div>
            <span className="mt-3 ">
              <FaYoutube className="text-[45px]" />
            </span>
            <h3 className="text-[50px] text-white">450k+</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
