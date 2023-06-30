import React from "react";

const Banner = ({ image, text }) => {
  return (
    <section className="relative mt-20">
      <div className="w-full h-60 md:h-[32rem]">
        <img src={image} alt={text} className="w-full h-full" />
      </div>
      <h1 className="text-2xl absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4 text-center text-white sm:text-3xl md:text-5xl">
        {text}
      </h1>
    </section>
  );
};

export default Banner;
