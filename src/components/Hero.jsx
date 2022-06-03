import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="Home" className="bg-hero-blob bg-cover bg-fixed h-screen ">
      
      <div className="h-full flex flex-col items-center justify-center text-center md:mx-48 pt-28">
        <div className="flex flex-col justify-center items-center mb-16 md:mb-36 mx-10">
          <h1 className="font-bold text-6xl md:6xl lg:text-6xl mb-8">
            Hey! It's me <span className="text-theme font-poppins hover:text-cyan-300">
              Kelvin.
            </span>
          </h1>
          <h2 className="mb-14 text-lg max-w-xs md:max-w-2xl w-full">
            I develop and design
            <span className="text-cyan-300"> digital experiences.</span>
            <br />
            
          </h2>
          <div className="flex  justify-center">
            <a href={require('../assets/Resume.pdf')} target='_blank' rel='noopener noreferrer'
              className="py-3 px-3 text-sm md:mx-10 md:px-5 md:py-4 md:text-xl border-2 border-theme transition ease-in-out 
          hover:bg-theme rounded-2xl font-bold cursor-pointer"
              
            >
              Curriculum Vitae
            </a>
          </div>
        </div>
        <div className="text-6xl transition ease-in-out hover:text-theme ">
          <Link to="Contact" smooth={true} duration={700}>
            <FaAngleDoubleDown />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
