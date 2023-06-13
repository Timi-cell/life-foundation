import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Pic15 from "../assets/image/pic-15.png";
import Pic16 from "../assets/image/pic-16.png";
import Pic18 from "../assets/image/pic-18.png";
import Pic19 from "../assets/image/pic-19.png";
import Pic20 from "../assets/image/pic-20.png";
import Pic26 from "../assets/image/pic-26.png";
import Pic27 from "../assets/image/pic-27.png";
import { BlogBlock } from "../components/Blocks";
import Banner from "../components/Banner";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      {/* Banner */}
      <Banner image={Pic15} text={"BLOG"} />
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
          date={"8th April"}
          heading={"Empowering the youths"}
          text={
            "Giving the youth a platform to build their skills, and building them ready for the labour market. So far, we have begun 2 cohorts in the northern regions of Nigeria."
          }
          image={Pic18}
        />
        <BlogBlock
          date={"15th April"}
          heading={"The focal point of a greater Nigeria"}
          text={
            "Giving the youth a platform to build their skills, and building them ready for the labour market. So far, we have begun 2 cohorts in the northern regions of Nigeria."
          }
          image={Pic19}
        />
        <BlogBlock
          date={"22nd April"}
          heading={"Hope in action, we keep inspiring"}
          text={
            "Hope is a powerful force that can change lives, even in the most challenging of circumstances. For less privileged individuals..."
          }
          image={Pic20}
        />
        <BlogBlock
          date={"22nd April"}
          heading={"The roles of Non-profits in Education"}
          text={
            "Giving the youth a platform to build their skills, and building them ready for the labour market. So far, we have begun 2 cohorts in the northern regions of Nigeria."
          }
          image={Pic26}
        />
        <BlogBlock
          date={"22nd April"}
          heading={"Advocating for disability rights"}
          text={
            "Giving the youth a platform to build their skills, and building them ready for the labour market. So far, we have begun 2 cohorts in the northern regions of Nigeria."
          }
        />
        <BlogBlock
          date={"22nd April"}
          heading={"The importance of volunteering"}
          text={
            "Giving the youth a platform to build their skills, and building them ready for the labour market. So far, we have begun 2 cohorts in the northern regions of Nigeria."
          }
          image={Pic27}
        />
      </section>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Blog;
