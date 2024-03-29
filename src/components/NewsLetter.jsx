import React, { useRef } from "react";
import Pic2 from "../assets/image/pic-2.png";
import Pic10 from "../assets/image/pic-10.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const NewsLetter = ({ leaveSpace }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "service_dxryc5p",
          "template_en7avbi",
          form.current,
          "XsjzN-uoi1xrSwWPL"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      toast.success("Subscription request sent!");
    } catch (error) {
      toast.error("Subscription request not sent!. Please try again!");
    }
  };
  return (
    <article
      className={`${
        leaveSpace ? "mt-10 md:mt-20" : ""
      } h-full md:h-128 bg-blue-800 flex flex-col-reverse md:flex-row justify-between items-center md:gap-4 gap-0 text-white`}
    >
      <div className="px-5 md:px-8 py-8 md:py-0 md:w-1/2 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl">
          Sign up to our Newsletter
        </h2>
        <p className="lg:text-lg text-sm sm:text-base mt-4 text-white">
          Receive exclusive content from our activities and get to know how you
          can participate.
        </p>
        <form className="mt-4" onSubmit={sendEmail} ref={form}>
          <div className="w-3/4 border-white border-b border-solid">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="block w-full border-none text-white placeholder:text-white bg-transparent"
            />
          </div>
          <div className="w-3/4 border-white border-b border-solid">
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              className="block w-full border-none text-white placeholder:text-white bg-transparent mt-8"
            />
          </div>
          <button className="px-4 py-2 mt-4 lg:text-lg text-sm sm:text-base bg-yellow-300 text-white border-2 border-yellow-300 rounded-md transition-all delay-100 ease-in hover:bg-yellow-400  hover:border-yellow-400 focus:bg-yellow-500 focus:border-yellow-500">
            Subscribe
          </button>
        </form>
      </div>
      <img
        src={Pic2}
        alt="two girls holding a paper"
        className="hidden md:block md:w-1/2 h-full"
      />
      <img
        src={Pic10}
        alt="set of children"
        className="w-full md:hidden block h-full"
      />
    </article>
  );
};

export default NewsLetter;

// service_dxryc5p
// template_en7avbi
// XsjzN-uoi1xrSwWPL
