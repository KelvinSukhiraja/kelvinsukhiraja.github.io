import React from "react";
import emailjs from "emailjs-com";
import { FaAngleDoubleUp, FaGithub, FaLinkedin  } from "react-icons/fa";
import { Link } from "react-scroll";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qog3xkl",
        "template_7zcp3xw",
        e.target,
        "O7JC4REn5jFpfxgnd"
      )
      .then(
        () => {
         alert("Submitted!");
        },
        () => {
          alert("Error");
        }
      ); e.target.reset();
  };
  

  return (
    <div id="Contact" className="h-auto bg-theme flex justify-center p-4">
      <form
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full text-gray-800 min-h-screen justify-center"
      >
        <div className="self-center text-white text-4xl text transition ease-in-out hover:text-cyan-300 ">
          <Link to="Home" smooth={true} duration={700}>
            <FaAngleDoubleUp />
          </Link>
        </div>
        <div className="mt-10 md:mt-28">
          <p className="text-4xl md:text-7xl font-extrabold inline text-body ">
            Contact
          </p>
          <div className="flex text-cyan-400">
            <a
              href="https://www.linkedin.com/in/KelvinSukhiraja/"
              target="_blank"
              rel="noopener noreferrer"
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

          <p className="text-white my-5">
            Send me a message and I'll get back to you!
          </p>
        </div>
        <input
          className="my-2 p-2 rounded-lg"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-2 p-2 rounded-lg"
          type="email"
          placeholder="E-Mail"
          name="email"
        />
        <textarea
          className="my-2 p-2 rounded-lg"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <input
          type="submit"
          value="Send"
          name="submit"
          className="font-bold text-xl md:text-4xl text-body border-2 border-cyan-400 rounded-2xl hover:bg-cyan-300 px-8 py-3 mt-10 mx-auto flex items-center"
        />
      </form>
    </div>
  );
};

export default Contact;
