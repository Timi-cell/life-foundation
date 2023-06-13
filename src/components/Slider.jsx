import React from "react";
import One from "../assets/image/pic-6.png";
import Two from "../assets/image/pic-7.png";
import Three from "../assets/image/pic-8.png";
import Four from "../assets/image/pic-9.png";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

const ImageText = ({ imgAlt, imgSrc, heading, text1, text2 }) => {
  return (
    <div className="w-full h-full relative text-center">
      <img alt={imgAlt} src={imgSrc} className="h-full w-full" />
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4 w-full px-10 flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-between">
        <h1 className="text-2xl w-full md:w-3/4 lg:w-1/2 sm:text-3xl md:text-5xl">
          {heading}
        </h1>
        <div className="lg:text-lg text-sm sm:text-base px-2">
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
        <Link to="/get-involved">
          <button className="p-3 lg:text-lg text-sm sm:text-base bg-yellow-300 text-white border-2 border-yellow-300 rounded-md transition-all delay-100 ease-in hover:bg-yellow-400 hover:border-yellow-400 focus:bg-yellow-500 focus:border-yellow-500">
            Get Involved
          </button>
        </Link>
      </div>
    </div>
  );
};

const Slider = () => {
  return (
    <section className="md:h-96 lg:h-[32rem] h-80 slider text-white overflow-hidden">
      <Carousel slideInterval={3000}>
        <ImageText
          imgAlt="block-1"
          imgSrc={One}
          heading={"Investing in the lives of young people"}
          text1={
            "We are dedicated to helping those in need and creating a better world for all"
          }
          text2={"Join us in making a difference today!"}
        />
        <ImageText
          imgAlt="block-2"
          imgSrc={Two}
          heading={"Bringing Hope and Joy to Those in Need"}
          text1={
            "We are dedicated to helping those in need and creating a better world for all"
          }
          text2={"Join us in making a difference today!"}
        />
        <ImageText
          imgAlt="block-3"
          imgSrc={Three}
          heading={"Inspiring people with our voices"}
          text1={
            "We are dedicated to helping those in need and creating a better world for all"
          }
          text2={"Join us in making a difference today!"}
        />
        <ImageText
          imgAlt="block-4"
          imgSrc={Four}
          heading={"Unlocking Potential and Empowering Our Youth"}
          text1={
            "We are dedicated to helping those in need and creating a better world for all"
          }
          text2={"Join us in making a difference today!"}
        />
      </Carousel>
    </section>
  );
};

export default Slider;
