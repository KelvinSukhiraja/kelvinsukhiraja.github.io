import React from "react";
import { Parallax } from "react-scroll-parallax";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="h-auto overflow-hidden bg-theme bg-cover w-auto"
    >
      <div className="min-h-screen flex flex-col justify-evenly items-center">
        <h1 className=" text-4xl self-start m-10 md:m-24 font-bold">Skills</h1>
        <Parallax translateX={[-150, 30]}>
          <div className="flex flex-row m-5">
            <img
              className="object-contain h-14 md:h-24 w-auto mx-2 md:mx-10 p-2 md:p-4 border bg-white rounded-full"
              alt="spring_logo"
              src={require("../assets/spring.png")}
            />
            <img
              className="object-contain h-14 md:h-24 w-auto mx-5 md:mx-10"
              alt="html_logo"
              src={require("../assets/html.png")}
            />
            <img
              className="object-contain h-14 md:h-24 w-auto mx-5 md:mx-10"
              alt="css_logo"
              src={require("../assets/css.png")}
            />
            <img
              className="object-contain h-14 md:h-24 w-auto mx-5 md:mx-10 md:p-3 border bg-white rounded-full"
              alt="java_logo"
              src={require("../assets/java.png")}
            />
          </div>
        </Parallax>

        <Parallax rotate={[0, 360]}>
          <img
            className="object-contain h-20 md:h-28 w-auto m-28"
            alt="react_logo"
            src={require("../assets/react.png")}
          />
        </Parallax>

        <Parallax translateX={[50, -80]}>
          <div className="flex flex-row m-5">
            <img
              className="object-contain h-14 md:h-24 w-auto mx-5 md:mx-10"
              alt="tailwind_logo"
              src={require("../assets/tailwind.png")}
            />
            <img
              className="object-contain h-14 md:h-24 w-auto mx-5 md:mx-10"
              alt="c++_logo"
              src={require("../assets/c++.png")}
            />
            <img
              className="object-contain h-14 md:h-24 w-auto mx-5 md:mx-10"
              alt="android_logo"
              src={require("../assets/android.png")}
            />
            <img
              className="object-contain h-14 md:h-24 w-auto border p-2 md:p-5 bg-white rounded-full mx-5 md:mx-10"
              alt="mysql_logo"
              src={require("../assets/mysql.png")}
            />
          </div>
        </Parallax>
        <h1 className="text-lg md:text-3xl self-start m-10 md:m-24 font-thin">
          Here are some skills that <br />
          I have had<p className="text-cyan-300">experiences</p> with.
        </h1>
      </div>

      <div className="hidden h-full  flex-col justify-evenly items-center">
        <h1>Skills</h1>
      </div>
    </div>
  );
};

export default Skills;
