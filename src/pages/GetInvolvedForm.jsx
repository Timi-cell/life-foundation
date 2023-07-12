import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Pic17 from "../assets/image/pic-17.png";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const GetInvolvedForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      {/* Banner */}
      <Banner image={Pic17} text={"GET INVOLVED"} />
      {/* Form */}
      <section className="mt-10  md:mt-20 px-4 md:px-8">
        <h2 className="text-lg md:text-xl">
          Fill the information below to get involved
        </h2>
        <form className="mt-4">
          <div>
            <label htmlFor="name">
              Full Name <sup>*</sup>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full md:w-1/2 block mt-4 rounded-lg placeholder:text-gray-600"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email">
              E-mail Address <sup>*</sup>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full md:w-1/2 block mt-4 rounded-lg placeholder:text-gray-600"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="address">
              Home Address <sup>*</sup>
            </label>
            <input
              type="text"
              id="address"
              placeholder="Address"
              className="w-full md:w-1/2 block mt-4 rounded-lg placeholder:text-gray-600"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="phone">
              Phone Number <sup>*</sup>
            </label>
            <div className="w-full md:w-1/2 mt-4 flex flex-row items-center justify-between gap-3">
              {/* <input
                type="number"
                placeholder="+234" 
                className="w-20 block rounded-lg placeholder:text-gray-600"
                required
              /> */}
              <select className="w-28 block rounded-lg placeholder:text-gray-600">
              TODO:
                {/* <option value="">Code</option> */}
                <option value="+234">+234</option>
                {/* <option value="+44">+44</option> */}
              </select>
              <input
                type="number"
                id="phone"
                min="0"
                placeholder="Phone No."
                className="w-full block rounded-lg placeholder:text-gray-600"
                required
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-start mt-4 items-center flex-wrap">
            <div className="flex flex-row gap-2 justify-start items-center">
              <label htmlFor="vol">Volunteer</label>
              <input type="checkbox" id="vol" />
            </div>
            <div className="flex flex-row gap-2 justify-start items-center">
              <label htmlFor="part">Partner with us</label>
              <input type="checkbox" id="part" />
            </div>
            <Link to="/donate">
              <p className="cursor-pointer underline text-gray-600 hover:text-black">
                Donate today
              </p>
            </Link>
          </div>
          <button className="px-5 py-4 mt-4 lg:text-lg text-sm sm:text-base bg-yellow-300 text-white rounded-md">
            Submit
          </button>
        </form>
      </section>
      <NewsLetter leaveSpace={true} />
      <Footer />
    </>
  );
};

export default GetInvolvedForm;
