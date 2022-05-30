import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/Logo-Active.svg"

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
  return (
    <div className="fixed flex justify-between items-center mx-auto md:px-14 w-full transition ease-in-out md:hover:bg-white ">
      <div className="flex flex-row w-screen justify-between hover:text-slate-800">
        <Link to="Home" smooth={true} duration={700}>
          <img
            src={logo}
            className="font-extrabold cursor-pointer p-5 hover:text-theme"
            alt="logo"
          />
        </Link>

        <ul className="hidden md:flex space-x-9 items-center font-montserrat">
          <li className="hover:border-b-theme border-transparent border-2 cursor-pointer">
            <Link to="Home" smooth={true} duration={700}>
              Home
            </Link>
          </li>
          <li className="hover:border-b-theme border-transparent border-2 cursor-pointer">
            <Link to="Skills" smooth={true} duration={700}>
              Skills
            </Link>
          </li>
          <li className="hover:border-b-theme border-transparent border-2 cursor-pointer">
            <Link to="Projects" smooth={true} duration={700}>
              Projects
            </Link>
          </li>
          <li
            className="px-5 py-2 border-2 border-pink-500 transition ease-in-out hover:bg-theme hover:text-gray-100
          rounded-md font-bold cursor-pointer"
          >
            <Link to="Contact" smooth={true} duration={700}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div onClick={handleClick} className="md:hidden z-10 mx-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-body text-white flex flex-col justify-center items-center"
        }
      >
        <li className="hover:border-b-theme border-transparent border-2 cursor-pointer my-6 text-4xl">
          <Link to="Home" smooth={true} duration={700}>
            Home
          </Link>
        </li>
        <li className="hover:border-b-theme border-transparent border-2 cursor-pointer my-6 text-4xl">
          <Link to="Skills" smooth={true} duration={700}>
            Skills
          </Link>
        </li>
        <li className="hover:border-b-theme border-transparent border-2 cursor-pointer my-6 text-4xl">
          <Link to="Projects" smooth={true} duration={700}>
            Projects
          </Link>
        </li>
        <li
          className="px-5 py-2 border-2 border-pink-500 transition ease-in-out hover:bg-theme
          rounded-md font-bold cursor-pointer my-6 text-4xl"
        >
          <Link to="Contact" smooth={true} duration={700}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
