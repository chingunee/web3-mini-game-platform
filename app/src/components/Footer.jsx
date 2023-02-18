import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import crazy_logo from "../../assets/Crazy-Goat-2.png";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#04865A] to-[#000809]  md:h-[30rem] h-[25rem] bg-no-repeat object-coverg">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="h-5/6 flex flex-col justify-center items-center space-y-6">
          <img className="h-72" src={crazy_logo} alt="img" />
          <div className="flex items-center space-x-4">
            <div className="cursor-pointer flex items-center justify-center border border-[#28dbd1]/50 text-white/80 hover:text-[#28dbd1] w-10 h-10 rounded">
              <FaFacebookF size={20} />
            </div>
            <div className="cursor-pointer flex items-center justify-center border border-[#28dbd1]/50 text-white/80 hover:text-[#28dbd1] w-10 h-10 rounded">
              <FaLinkedinIn size={20} />
            </div>
            <div className="cursor-pointer flex items-center justify-center border border-[#28dbd1]/50 text-white/80 hover:text-[#28dbd1] w-10 h-10 rounded">
              <FaTwitter size={20} />
            </div>
            <div className="cursor-pointer flex items-center justify-center border border-[#28dbd1]/50 text-white/80 hover:text-[#28dbd1] w-10 h-10 rounded">
              <FaInstagram size={20} />
            </div>
            <div className="cursor-pointer flex items-center justify-center border border-[#28dbd1]/50 text-white/80 hover:text-[#28dbd1] w-10 h-10 rounded">
              <FaDiscord size={20} />
            </div>
          </div>
        </div>
        <div className="w-full h-1/6 border-t-[0.01rem] border-gray-600 flex items-center justify-center">
          <p className="text-white/70 font-body md:text-lg font-medium">
            CRAZY GOAT © 2023 | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
