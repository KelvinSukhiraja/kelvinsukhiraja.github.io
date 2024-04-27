import classNames from "classnames";
import React from "react";
import { FaGithub, FaExpandAlt } from "react-icons/fa";

const ProjectContent = (props) => {
  const classStr = classNames(
    "flex flex-col-reverse justify-center my-5 md:p-16",
    props.direction
  );

  const expIconStr = classNames("cursor-pointer", props.expIcon);
  const gitIconStr = classNames("cursor-pointer", props.gitIcon);

  return (
    <div className={classStr}>
      <div className="text-justify p-7 md:p-10 ">
        <h1 className="md:text-3xl text-xl text-cyan-300">{props.title}</h1>
        <p className="max-w-sm text-sm md:text-lg mt-5">{props.desc}</p>
        <div className="flex flex-row justify-evenly text-sm md:text-lg text-teal-300 pt-3">
          {props.tech}
        </div>
        <div className="flex flex-row justify-end md:text-3xl text-white">
          <div className="p-2 md:p-5">
            <a
              href={props.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExpandAlt className={expIconStr} />
            </a>
          </div>
          <div className="p-2 md:p-5">
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={gitIconStr} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <a href={props.websiteLink} target="_blank" rel="noopener noreferrer">
          <img
            className="object-contain h-48 md:h-80 w-auto px-14 "
            alt="project_screenshot"
            src={props.pic}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectContent;
