import React from "react";
import emailjs from "emailjs-com";

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
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      ); e.target.reset();
  };
  

  return (
    <div id="Contact" className="h-auto bg-theme flex justify-center p-4">
      <form
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full text-gray-800 min-h-screen justify-center"
      >
        <div className="mt-28">
          <p className="text-4xl md:text-7xl font-extrabold inline text-body ">
            Contact
          </p>
          <p className="text-white my-5">
            Send me a message and I'll get back to you!
          </p>
        </div>
        <input
          className="my-2 p-2 rounded-lg"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-2 p-2 rounded-lg"
          type="text"
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
          className="text-4xl text-white border-2 border-cyan-300 rounded-2xl hover:bg-cyan-300 px-8 py-3 mt-10 mx-auto flex items-center"
        />
      </form>
    </div>
  );
};

export default Contact;
