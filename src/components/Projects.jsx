import React from "react";
import ProjectContent from "./ProjectContent";

const Projects = () => {
  return (
    <div id="Projects" className="bg-body flex flex-col ">
      <div className="text-3xl md:text-5xl text-theme font-extrabold flex justify-center mt-32 md:mt-36">
        Personal Projects
      </div>

      <div className="flex flex-col justify-center my-10 md:my-32 ">
        <ProjectContent
          title="Human-Resource Manager"
          desc="A stylish, modern and easy to use management system design to be
             used by the human-resource department. It is also developed using Spring 
             Security making it secure and reliable. Web app is deployed on Heroku and uses the ClearDB remote database 
             -Admin username: admin, password: admin for admin demo-"
          pic={require("../assets/human-resource-manager.png")}
          direction="md:flex-row"
          tech={["Spring", " /Java", " /MySql", " /CSS"]}
          githubLink="https://github.com/KelvinSukhiraja/human-resource-manager"
          websiteLink="http://human-resource-manager-kelvin.herokuapp.com/"
        />
        <ProjectContent
          title="University Web Parsing App"
          desc="Inspired by the over-cluttering of my university’s website,
              I decided to make an android app that allows us to check
              our grades and the university news in a far simpler way."
          pic={require("../assets/android-app.png")}
          direction="md:flex-row-reverse"
          tech={["Android", " /Java"]}
          githubLink="https://github.com/KelvinSukhiraja/University-Web-Parsing-Android-App"
          linkIcon="hidden"
        />
        <ProjectContent
          title="Personal Portfolio"
          desc="A reactive website created for the purpose of displaying my skills and 
              experiences. It is developed with current technologies 
              that best describe what I am passionate about. Deployed using Netlify.
              Btw, you are using it right now"
          pic={require("../assets/PortfolioHomepage.png")}
          direction="md:flex-row"
          tech={["React", " /Tailwind"]}
          githubLink="https://github.com/KelvinSukhiraja/kelvinsukhiraja.github.io"
          linkIcon="hidden"
        />
      </div>
    </div>
  );
};

export default Projects;
