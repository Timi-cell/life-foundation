import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Pic32 from "../assets/image/pic-32.png";
import Pic25 from "../assets/image/pic-25.png";
import Banner from "../components/Banner";
import { FlexBlock } from "../components/Blocks";

const PriceTag = ({ price }) => {
  return (
    <p className="py-4 px-8 bg-gray-300 rounded-md cursor-pointer text-center lg:text-lg text-sm sm:text-base">
      {price}
    </p>
  );
};

const Donate = () => {
  const [toggle, setToggle] = useState(true);
  const myToggle = () => setToggle(!toggle);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Banner image={Pic32} text={"DONATE"} />
      <section className="px-4 md:px-8">
        <FlexBlock
          image={Pic25}
          heading={"Making donations"}
          text={
            "These funds are used to create a lasting impact and a difference in the lives of those in need. By donating, individuals can contribute to the betterment of society and make a significant difference in the world. Every donation, no matter how small, can help us achieve its goals and bring hope to those in need."
          }
          reverse={false}
        />
      </section>
      <section className="px-4 md:px-8 flex flex-row justify-center items-center">
        <div className="flex w-[32rem] md:w-1/2 mt-10 md:mt-20 flex-col items-center justify-between gap-4 py-4 md:px-8 px-4 bg-gray-200 rounded-md text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl">
            Supporting LIFE Foundation
          </h2>
          <p className="lg:text-lg text-sm sm:text-base  text-gray-600">
            Contributions in any account are welcome and indeed are most
            gracefully received.
          </p>
          <p className="lg:text-lg text-sm sm:text-base">Donation Frequency</p>
          <div
            className="flex flex-row gap-0 rounded-md overflow-hidden"
            onClick={myToggle}
          >
            <button
              className={`py-2 transition-all delay-75 ease-in px-5 lg:text-lg text-sm sm:text-base border-2 ${
                toggle
                  ? "bg-yellow-300 text-white border-yellow-300"
                  : "bg-white border-white text-black"
              } `}
            >
              One-time
            </button>
            <button
              className={`py-2 transition-all delay-75 ease-in px-5 lg:text-lg text-sm sm:text-base border-2 ${
                toggle
                  ? "bg-white border-white text-black"
                  : "bg-yellow-300 text-white border-yellow-300"
              } `}
            >
              Monthly
            </button>
          </div>
          <p className="lg:text-lg text-sm sm:text-base ">Donation Amount</p>
          <div className="grid grid-cols-2 grid-rows-3 md:gap-8 gap-4">
            <PriceTag price={"₦1,000"} />
            <PriceTag price={"₦10,000"} />
            <PriceTag price={"₦2,000"} />
            <PriceTag price={"₦20,000"} />
            <PriceTag price={"₦5,000"} />
            <PriceTag price={"₦50,000"} />
          </div>
          <hr className="bg-gray-300 w-full h-1" />
          <div className="flex flex-row justify-center items-center gap-4">
            <p className="lg:text-lg text-sm sm:text-base  text-gray-600">
              Others(₦)
            </p>
            <input
              type="number"
              min={"0"}
              className="text-right rounded-md border-gray-500 w-1/2 md:w-3/4 bg-gray-200"
              placeholder="0"
            />
          </div>
          <button className="p-2 lg:text-lg text-sm sm:text-base bg-yellow-300 text-white border-2 border-yellow-300 rounded-md transition-all delay-100 ease-in hover:bg-yellow-400  hover:border-yellow-400 focus:bg-yellow-500 focus:border-yellow-500 w-full">
           Proceed
          </button>
        </div>
      </section>
      <NewsLetter leaveSpace={true} />
      <Footer />
    </>
  );
};

export default Donate;
