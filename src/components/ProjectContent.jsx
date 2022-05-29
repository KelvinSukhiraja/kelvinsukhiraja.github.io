import classNames from "classnames";
import React from "react";
import { FaGithub, FaExpandAlt } from "react-icons/fa";

const ProjectContent = (props) => {
  const classStr = classNames(
    "flex flex-col-reverse justify-center my-5 md:p-16",
    props.direction
  );
  return (
    <div className={classStr}>
      <div className="text-justify p-7 md:p-10 ">
        <h1 className="md:text-3xl text-xl text-cyan-300">{props.title}</h1>
        <p className="max-w-sm text-sm md:text-lg mt-5">{props.desc}</p>
        <div className="flex flex-row justify-evenly text-sm md:text-lg text-teal-300 pt-3">
          {props.tech}
        </div>
        <div className="flex flex-row justify-evenly md:text-3xl text-white">
          <div className="p-2 md:p-5">
            <a href={props.githubLink} target="_blank">
              <FaGithub className="cursor-pointer" />
            </a>
          </div>
          <div className="p-2 md:p-5">
            <a href={props.websiteLink} target="_blank">
              <FaExpandAlt className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <img
          className="object-contain h-48 md:h-80 w-auto px-14 "
          src={props.pic}
        />
      </div>
    </div>
  );
};

export default ProjectContent;
