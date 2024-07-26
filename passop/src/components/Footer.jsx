import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center py-1 w-full bottom-0">
      <div className="logo font-bold text-white text-2xl ">
        <span className="text-purple-600">&lt;</span>
        Pass
        <span className="text-purple-600">OP/&gt;</span>
      </div>

      <div className="flex justify-center items-center gap-2 py-1">
        Created with <img className="h-6 w-6" src="icons/heart.png" alt="heart" /> by Aayush
      </div>
    </div>
  );
};

export default Footer;
