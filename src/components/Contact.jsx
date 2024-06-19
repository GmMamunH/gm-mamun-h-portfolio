import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="h-screen w-full bg-gradient-to-t from-black to-gray-500 px-3 md:px-6 "
    >
      <div className="text-center py-6 text-white">
        <p className="text-4xl underline py-3 font-bold">Contact</p>
        <p className="text-2xl">Submit the form below to get in touch with me:</p>
      </div>

      <div className="flex justify-center items-center">
      <form action="https://getform.io/f/zazkolpb" method="POST" className="flex flex-col w-full md:w-1/2">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 border-2 rounded-md focus:outline-none bg-transparent text-white"
          />
     
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="p-2 border-2 my-6 rounded-md focus:outline-none bg-transparent text-white"
          />

          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message"
            className="p-2 border-2 rounded-md focus:outline-none bg-transparent text-white"
          ></textarea>

          <button className=" flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer px-6 py-3 my-6 rounded-md text-2xl text-white hover:scale-110 duration-300">
            Let's Talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;