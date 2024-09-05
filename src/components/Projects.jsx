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
          title="NIREN Creative"
          desc="A creative agency portfolio website that focuses on a modern UI/UX design with a retro japanese-themed design. This website has seamless animations through pages with an extensive works gallery. I worked directly with the designer through figma to develop this website."
          pic={require("../assets/NirenHomepage.png")}
          direction="md:flex-row"
          tech={["React /", " Vite /", " TailwindCSS /", " Framer"]}
          websiteLink="https://nirencreative.com/"
          gitIcon="https://github.com/KelvinSukhiraja/NirenWebsite"
        />
        <ProjectContent
          title="WheelWorks"
          desc="A short portfolio website for an agency that focuses on digital marketing and online presence. This website was focused on to be a seamless one scroll website that reaches a simple point of contact."
          pic={require("../assets/WheelworksHomepage.png")}
          direction="md:flex-row-reverse"
          tech={["React /", " Vite /", " TailwindCSS /", " Framer"]}
          websiteLink="https://wheelworks.id/"
          gitIcon="https://github.com/KelvinSukhiraja/Wheelworks1"
        />
        <ProjectContent
          title="BVKE"
          desc="An e-commerce website that sells Bali-made brownies. It was personally designed by me using figma and was developed using wordpress. 
          The main point of this website was to promote and advertise the brownies with an easy to navigate and colorful pages that fits the company's brand."
          pic={require("../assets/BVKEHomepage.png")}
          direction="md:flex-row"
          tech={["Figma", " /WordPress"]}
          websiteLink="https://bvke.shop/"
          gitIcon="hidden"
        />
        <ProjectContent
          title="The Boardroom Partnership"
          desc="A portfolio for an international business partnership by a team of experienced professional to help local asian busninesses make their footsteps on the international market. 
          The design of this website was designed by Michellina Verdiani and I personally developed the website using modern technologies such as NEXT js and Tailwind, I also deployed and hosted the website."
          pic={require("../assets/BoardroomHomepage.png")}
          direction="md:flex-row-reverse"
          tech={["React", " /NEXT", " /Tailwind"]}
          githubLink="https://github.com/KelvinSukhiraja/boardroom"
          websiteLink="https://www.verhezen.net/"
          // githubLink="https://github.com/KelvinSukhiraja/boardroom"
          // WebsiteLink="https://www.verhezen.net/"
        />
        <ProjectContent
          title="Human-Resource Manager"
          desc="A stylish, modern and easy to use management system design to be
             used by the human-resource department. It is also developed using Spring 
             Security making it secure and reliable. Web app is deployed on Heroku and uses the ClearDB remote database. For admin demo, Username: admin | Password: admin"
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
          expIcon="hidden"
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
          expIcon="hidden"
        />
      </div>
    </div>
  );
};

export default Projects;
