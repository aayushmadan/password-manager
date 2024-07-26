import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white overflow-hidden">
      <div className="mycontainer flex justify-between items-center p-4 w-full h-16">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-purple-600">&lt;</span>
          Pass
          <span className="text-purple-600">OP/&gt;</span>
        </div>
        <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold hover:text-purple-400 transition duration-200" href="/" >
              Home
            </a>
            <a className="hover:font-bold hover:text-purple-400 transition duration-200" href="" >
              About
            </a>
            <a className="hover:font-bold hover:text-purple-400 transition duration-200" href="" >
              Contact
            </a>
            
          </li>
        </ul>

        <div>
          <button className="text-white bg-purple-600 rounded-full flex justify-center items-start p-1 ">
          <img className="py-1 pl-2 w-10" src="icons/github-mark-white.png" alt="github logo" />
          <span className="font-bold px-3 pt-2">Github</span>
          </button> 
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
