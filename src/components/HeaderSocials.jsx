import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div
      className="hidden text-base lg:text-xl
    h-full md:flex flex-col justify-end fixed"
    >
      <a
        href="https://www.linkedin.com/in/KelvinSukhiraja/"
        target="_blank" rel="noopener noreferrer"
        className="m-3 lg:m-5 lg:mr-8 flex justify-end"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/KelvinSukhiraja/"
        target="_blank"
        rel="noopener noreferrer"
        className="m-3 lg:m-5 lg:mr-8 flex justify-end"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
