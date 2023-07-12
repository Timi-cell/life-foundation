import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Pic31 from "../assets/image/pic-31.png";
import Pic24 from "../assets/image/pic-24.png";
import NewsLetter from "../components/NewsLetter";
import {
  BsFacebook,
  BsFillTelephoneFill,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Banner image={Pic31} text={"CONTACT US"} />
      <section className="px-4 md:px-8 mt-10 md:mt-20">
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-start md:items-center justify-between mt-4">
          <form className="w-full md:w-1/2">
            <h2 className="text-2xl lg:text-3xl mb-8 text-center md:text-left">
              Get in Touch
            </h2>
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email">E-mail Address</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                cols="20"
                rows="5"
                placeholder="Type a message..."
                className="w-full block mt-4 rounded-lg placeholder:text-gray-600"
              ></textarea>
            </div>
            <button className="px-6 py-3 mt-4 lg:text-lg text-sm sm:text-base bg-yellow-300 text-white rounded-md transition-all delay-100 ease-in hover:bg-yellow-400  hover:border-yellow-400 focus:bg-yellow-500 focus:border-yellow-500">
              Submit
            </button>
          </form>

          <div className="w-full md:w-1/2 relative">
            <img src={Pic24} alt="hands on a keyboard" className="w-full" />
            <div className="bg-gradient-to-t from-black h-full w-full absolute top-0 rounded-lg">
              <div className="absolute bottom-8 left-2/4 -translate-y-0 lg:-translate-y-1/2 -translate-x-1/2 lg:text-lg text-sm sm:text-base mt-2 text-white w-full px-4 md:px-8">
                <>
                  <h2 className="text-xl md:text-2xl">Contact</h2>
                  <div className="flex flex-row flex-wrap mt-4 gap-2 items-center">
                    <BsFillTelephoneFill size={22} color="#fff" />{" "}
                    <a href="tel:07067844491">07067844491</a>,{" "}
                    <a href="tel:09031988861">09031988861</a>
                  </div>
                  <div className="flex mt-4 flex-row flex-wrap gap-2 items-center">
                    <GrMail size={22} color="#fff" />
                    <a href="mailto:livinginfullexpression1@gmail.com">
                      livinginfullexpression1@gmail.com
                    </a>
                  </div>
                </>
                <hr className="text-white my-4" />
                <>
                  <h2 className="text-xl md:text-2xl">Follow us</h2>
                  <div className="flex flex-row gap-6 justify-start mt-4 items-center cursor-pointer flex-wrap">
                    <BsFacebook size={22} color="#fff" />
                    <BsTwitter size={22} color="#fff" />
                    <BsInstagram size={22} color="#fff" />
                    <BsLinkedin size={22} color="#fff" />
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsLetter leaveSpace={true} />
      <Footer />
    </>
  );
};

export default Contact;
