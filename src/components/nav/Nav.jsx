import React from "react";

const Nav = () => {
  return (
    <nav className="fixed top-0 z-50 w-full  bg-slate-800">
      <div className="flex justify-around space-x-4 py-4 ">
        <a
          className="hover:scale-110   duration-300 text-white  lg:text-2xl md:text-xl sm:text-lg"
          href="#menu"
        >
          Menu
        </a>
        <a
          className="hover:scale-110  duration-300 text-white  lg:text-2xl md:text-xl sm:text-lg"
          href="#about"
        >
          About
        </a>
        <a
          className="hover:scale-110  duration-300 text-white  lg:text-2xl md:text-xl sm:text-lg"
          href="#contact"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
