import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Pic15 from "../assets/image/pic-15.png";
import Pic16 from "../assets/image/pic-16.png";
import { BlogBlock } from "../components/Blocks";

const Blog = () => {
  return (
    <div>
      <Header />
      {/* Banner */}
      <section className="relative">
        <div className="w-full h-60 md:h-full">
          <img src={Pic15} alt="blog pic" className="w-full h-full" />
        </div>
        <h1 className="text-2xl absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4 text-center text-white sm:text-3xl md:text-5xl">
          BLOG
        </h1>
      </section>
      {/* Latest blog articles */}
      <section className="px-4 md:px-8 mt-10 md:mt-20">
        <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl">
          Latest blog articles
        </h2>
        <div className="mt-5 flex-col md:flex-row flex gap-4 md:gap-8 justify-between items-start md:items-center">
          <img
            src={Pic16}
            alt="children in the classroom"
            className="w-full h-full md:w-1/2"
          />
          <div className="w-full md:w-1/2">
            <div className="flex flex-row justify-start items-center gap-2">
              <button className="p-2 text-base bg-yellow-400 text-white rounded-md">
                Education
              </button>
              <p className="text-gray-600">•</p>
              <p className="text-gray-600">27th March, 2023</p>
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl mt-3">
              Impacting lives through <br /> scholarships for the younger
              generation.
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Our work so far from different perspectives and words from
              volunteers on a life changing trip.
            </p>
            <p className="text-xs mt-1">
              by LIFE Foundation Admin | 6 mins read
            </p>
          </div>
        </div>
      </section>
      {/* Blogs list */}
      <section className="grid mt-10 md:mt-20 md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-6 lg:grid-rows-2 lg:grid-cols-3 gap-x-4 gap-y-6 px-4 md:px-8">
        <BlogBlock
          date={"22nd April"}
          heading={"Empowering the youths"}
          text={
            "Giving the youth a platform to build their skills, and building them ready for the labour market. So far, we have begun 2 cohorts in the northern regions of Nigeria."
          }
        />
        <BlogBlock
          date={"22nd April"}
          heading={"Empowering the youths"}
          text={
            "Giving the youth a platform to build their skills, and building them ready for the labour market. So far, we have begun 2 cohorts in the northern regions of Nigeria."
          }
        />
        <BlogBlock
          date={"22nd April"}
          heading={"Empowering the youths"}
          text={
            "Giving the youth a platform to build their skills, and building them ready for the labour market. So far, we have begun 2 cohorts in the northern regions of Nigeria."
          }
        />
        <BlogBlock
          date={"22nd April"}
          heading={"Empowering the youths"}
          text={
            "Giving the youth a platform to build their skills, and building them ready for the labour market. So far, we have begun 2 cohorts in the northern regions of Nigeria."
          }
        />
        <BlogBlock
          date={"22nd April"}
          heading={"Empowering the youths"}
          text={
            "Giving the youth a platform to build their skills, and building them ready for the labour market. So far, we have begun 2 cohorts in the northern regions of Nigeria."
          }
        />
        <BlogBlock
          date={"22nd April"}
          heading={"Empowering the youths"}
          text={
            "Giving the youth a platform to build their skills, and building them ready for the labour market. So far, we have begun 2 cohorts in the northern regions of Nigeria."
          }
        />
      </section>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Blog;
