import React from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div
      className="hidden text-base lg:text-xl
    h-full md:flex flex-col justify-end fixed"
    >
      <a
        href="https://www.linkedin.com/in/kelvin-sukhiraja/"
        target="_blank"
        className="m-3 lg:m-5 lg:mr-8 flex justify-end"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/KelvinSukhiraja/"
        target="_blank"
        className="m-3 lg:m-5 lg:mr-8 flex justify-end"
      >
        <FaGithub />
      </a>
      <a href="/" className="m-3 mb-6 lg:m-5 lg:mr-8 flex justify-end">
        <FaDiscord />
      </a>
    </div>
  );
};

export default HeaderSocials;
