import React, { useEffect } from "react";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Pic11 from "../assets/image/pic-11.png";
import Pic12 from "../assets/image/pic-12.png";
import Pic13 from "../assets/image/pic-13.png";
import Pic14 from "../assets/image/pic-14.png";
import Line from "../assets/svg/line.svg";
import Tick from "../assets/svg/tick.svg";

const Badge = ({ text }) => {
  return (
    <div className="py-2 px-3 rounded-lg bg-yellow-200 flex flex-row gap-4 justify-start items-center">
      <div className="rounded-full bg-yellow-400 p-3">
        <img src={Tick} alt="tick" />
      </div>
      <p className="md:text-lg text-base">{text}</p>
    </div>
  );
};

const About = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Header />
      {/* Banner */}
      <section className="relative">
        <img
          src={Pic11}
          alt="desktop about-us pic"
          className="w-full h-full hidden md:block"
        />
        <div className="w-full h-60 block md:hidden">
          <img
            src={Pic14}
            alt="mobile about-us pic"
            className="w-full h-full"
          />
        </div>
        <h1 className="text-2xl absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4 text-center text-white sm:text-3xl md:text-5xl">
          ABOUT US
        </h1>
      </section>
      {/* Our Story */}
      <section className="flex px-4 md:px-8 mt-10 md:mt-20 flex-col md:flex-row justify-between gap-4 md:gap-8 items-start md:items-center">
        <div>
          <div className="w-32 h-1 bg-yellow-300"></div>
          <h2 className="mt-4 text-3xl md:text-4xl text-yellow-300">
            Our Story
          </h2>
          <p className="md:text-lg text-base mt-4 text-gray-600">
            How we started <br /> our journey.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="leading-7 md:text-lg text-base">
            Our charity foundation was founded in 2019 with the mission to
            provide aid to those in need. We believe that everyone should have
            access to the basic necessities of life. We have been able to
            provide food, clothing and other necessities to those who need it
            most. Our goal is to continue to help those in need and make a
            positive impact in our community. We are committed to making sure
            our efforts are making a difference in the lives of those we touch.
          </p>
        </div>
      </section>
      {/* Our mission and vision */}
      <section className="flex px-4 md:px-8 mt-10 md:mt-20 flex-col md:flex-row justify-between gap-8 items-start md:items-center">
        <div className="md:w-2/5 w-full">
          <div className="w-32 h-1 bg-yellow-300"></div>
          <h2 className="mt-4 text-3xl md:text-4xl text-yellow-300">
            Our Mission
          </h2>
          <p className="leading-7 mt-4 md:text-lg text-base h-full">
            Our mission at LIFE Foundation is to create pathways for young
            people. We strive to be a catalyst for growth and development,
            working to foster a more equitable and just future for all.
          </p>
          <img src={Pic12} alt="mission-pic" className="mt-4 w-full h-full" />
        </div>
        <img src={Line} alt="line" className="md:block hidden" />
        <div className="w-full md:w-2/5">
          <div className="w-32 h-1 bg-yellow-300"></div>
          <h2 className="mt-4 text-3xl md:text-4xl text-yellow-300">
            Our Vision
          </h2>
          <p className="leading-7 mt-4 md:text-lg text-base h-full">
            Our charity foundation exists to create a world of equal
            opportunities for all, where everybody has the chance to reach their
            full potential and access resources to help them succeed.
          </p>
          <img src={Pic13} alt="vision-pic" className="mt-4 w-full h-full" />
        </div>
      </section>
      {/* Our Goal */}
      <section className="px-4 flex flex-col items-center gap-4 justify-between md:flex-row md:px-8 py-16 mt-10 md:mt-20 bg-gray-100">
        <div className="md:w-2/5 w-full">
          <div className="w-32 h-1 bg-yellow-300"></div>
          <h2 className="mt-4 text-3xl md:text-4xl text-yellow-300">
            Our Goal
          </h2>
          <p className="leading-7 mt-4 md:text-lg text-base h-full">
            The goal of this foundation is to save as many young people that we
            will be led to. To lead these young people to Christ and snatch them
            from the hands of the devil. There are many out there who are yet to
            encounter the undiluted word of God. We aims to provide hope to the
            hopeless, the less privileged, and the downtrodden in society.
          </p>
        </div>
        <div className="grid grid-rows-1 lg:grid-rows-3 grid-cols-1 lg:grid-cols-2 gap-3">
          <Badge text={"Identify and address challenges"} />
          <Badge text={"Save as many young people"} />
          <Badge text={"Support the disabled"} />
          <Badge text={"Help students in low-income"} />
          <Badge text={"Involve in Community outreach"} />
          <Badge text={"Involve in Community outreach"} />
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default About;
