import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Pic15 from "../assets/image/pic-15.png";
import Pic16 from "../assets/image/pic-16.png";
import Pic18 from "../assets/image/pic-18.png";
import Pic19 from "../assets/image/pic-19.png";
import Pic20 from "../assets/image/pic-20.png";
// import Pic26 from "../assets/image/pic-26.png";
// import Pic28 from "../assets/image/pic-28.png";
// import Pic29 from "../assets/image/pic-29.png";
import { BlogBlock } from "../components/Blocks";
import Banner from "../components/Banner";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
            {/* <div className="flex flex-row justify-start items-center gap-2"> */}
              <div className="p-2 text-base w-max bg-blue-800 cursor-default text-white rounded-md">
               27th March, 2023
              </div>
              {/* <p className="text-gray-600">•</p>
              <p className="text-gray-600">27th March, 2023</p>
            </div> */}
            <h3 className="text-xl md:text-2xl lg:text-3xl mt-3">
              Impacting lives through scholarships support
            </h3>
            <p className="mt-3 text-sm">
              Our work so far from different perspectives and words from
              volunteers on a life changing encounter.
            </p>
            <p className="text-xs text-gray-600 mt-3">
              by LIFE Foundation Admin | 6 mins read
            </p>
          </div>
        </div>
      </section>
      {/* Blogs list */}
      <section className="grid mt-10 md:mt-20 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-x-4 gap-y-6 px-4 md:px-8">
        <BlogBlock
          date={"2nd April"}
          heading={"Empowering the young generation"}
          text={
            "Giving the young people a platform to build their intellect and skills, and building them ready for a higher level. So far, we have begun 2 cohorts in..."
          }
          image={Pic18}
          blogLink={"/blog/1"}
        />
        <BlogBlock
          date={"9th April"}
          heading={"Join our mission to change lives"}
          text={
            "We believe we have the extraordinary power to transform lives, as we tirelessly work towards providing support, and empowering individuals in need..."
          }
              blogLink={"/blog/2"}
          image={Pic19} 
        />
        <BlogBlock
          date={"16th April"}
          heading={"Hope in action, we keep inspiring"}
          text={
            "Hope is a powerful force that can change lives, even in the most challenging of circumstances. For less privileged individuals and communities..."
          }
          image={Pic20}
        />
        {/* <BlogBlock
          date={"23rd April"}
          heading={"The roles of Non-profits in Education"}
          text={
            "Through innovative approaches, nonprofits provide invaluable support, resources, ensuring that no one is left behind in the pursuit of education..."
          }
          image={Pic26}
        />
        <BlogBlock
          date={"30th April"}
          heading={"Advocating for disability rights"}
          text={
            "By championing the rights of disabled persons, we can break down barriers, defeat stereotypes, create a world where all has access to education, healthcare and..."
          }
          image={Pic28}
        />
        <BlogBlock
          date={"11th May"}
          heading={"The importance of volunteering"}
          text={
            "Volunteering in NGO’s is a vital force that fuels their mission, as dedicated individuals contribute their time, skills, and passion to address societal needs..."
          }
          image={Pic29}
        /> */}
      </section>
      <NewsLetter leaveSpace={true} />
      <Footer />
    </>
  );
};

export default Blog;
