import React, { useEffect } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Pic1 from "../assets/image/pic-1.png";
import Icon1 from "../assets/svg/cross.svg";
import Icon2 from "../assets/svg/cap.svg";
import Icon3 from "../assets/svg/building.svg";
import Icon4 from "../assets/svg/sit.svg";
import Icon5 from "../assets/svg/brain.svg";
import Icon6 from "../assets/svg/firstaid.svg";
import Pic2 from "../assets/image/pic-2.png";
import Pic3 from "../assets/image/pic-3.png";
import Pic4 from "../assets/image/pic-4.png";
import Pic5 from "../assets/image/pic-5.png";
import Pic18 from "../assets/image/pic-18.png";
import Pic19 from "../assets/image/pic-19.png";
import Pic20 from "../assets/image/pic-20.png";
import { BlogBlock, ImageBlock, InfoBlock } from "../components/Blocks";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import { Link } from "react-router-dom";

const Home = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <main>
      <Header />
      <Slider />
      {/* Who we are */}
      <section className="flex px-4 md:px-8 flex-col lg:flex-row justify-between mt-9 gap-8 lg:gap-40">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl">Who we are</h2>
          <p className="mt-5 leading-7 lg:text-lg text-sm sm:text-base">
            The Living in Full Expression (LIFE) foundation aims to provide hope
            to the hopeless, the less privileged, and the downtrodden in
            society. We hope to serve as a bridge through which the son of
            nobody can become somebody in life and by which opportunities can be
            provided for people that will otherwise not have an option for
            upward mobility in society. In summary, we aim to assist people to
            live in the full expression of their destinies.
          </p>
          <Link to="/about-us">
            <button className="p-3 mt-5 lg:text-lg text-sm sm:text-base bg-yellow-300 text-white border-2 border-yellow-300 rounded-md transition-all delay-100 ease-in hover:bg-yellow-400  hover:border-yellow-400 focus:bg-yellow-500 focus:border-yellow-500">
              Learn More
            </button>
          </Link>
        </div>
        <img src={Pic1} alt="pic-1" className="w-full h-full" />
      </section>
      {/* What we do */}
      <section className="text-center mt-12 px-4 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl">What we do</h2>
        <p className="lg:text-lg text-sm sm:text-base mt-2 text-gray-600">
          How we are able to help individuals in need
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3 md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-6 lg:grid-rows-2 md:px-20 px-0 lg:px-24">
          <InfoBlock
            icon={Icon1}
            heading={"Gospel"}
            text={
              "By Shining the light of Christ, knowing fully well that no man can live in fullness of his expressions without supreme help from God."
            }
          />
          <InfoBlock
            icon={Icon2}
            heading={"Scholarships"}
            text={
              "To give yearly scholarships to indigene but brilliant students in public high schools across Nigeria."
            }
          />
          <InfoBlock
            icon={Icon3}
            heading={"Tuition support"}
            text={
              "To provide tuition and cost of living support to indigene students in higher learning institutions."
            }
          />
          <InfoBlock
            icon={Icon4}
            heading={"Support for the disabled"}
            text={
              "To provide educational, material, and financial support to people living with disabilities across the nation."
            }
          />
          <InfoBlock
            icon={Icon5}
            heading={"Skills building"}
            text={
              "To support youths in learning wealth-building skills through regular hosting and sponsorship of skills-building workshop."
            }
          />
          <InfoBlock
            icon={Icon6}
            heading={"Medical and surgical care"}
            text={
              "Provide medical and surgical care to underserved populace in Nigeria in partnerships with other health organizations."
            }
          />
        </div>
      </section>
      {/* Our core values */}
      <section className="text-center mt-12 px-4 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl">Our Core Values</h2>
        <p className="lg:text-lg text-sm sm:text-base mt-2 text-gray-600">
          Our core values and work are anchored on these three(3) areas.
        </p>
        <div className="mt-2 flex flex-col sm:flex-row justify-between gap-4">
          <ImageBlock
            image={Pic2}
            heading={"Prioritizing Education"}
            text={`"Education is the passport to the future for tomorrow belongs to those who prepare for it today."`}
          />
          <ImageBlock
            image={Pic3}
            heading={"Shinning the Gospel"}
            text={`"We want to let more people know that the gospel is God's power unto salvation."`}
          />
          <ImageBlock
            image={Pic4}
            heading={"Building core skills"}
            text={`"There is great skill in knowing how to conceal one's skill."`}
          />
        </div>
      </section>
      {/* Outreach report */}
      <section className="flex px-4 md:px-8 lg:items-center sm:items-start flex-col lg:flex-row justify-between mt-20 gap-8 lg:gap-40">
        <div>
          <h2 className="text-xl sm:text-2xl text-left md:text-3xl">
            2022 Outreach Report
          </h2>
          <p className="mt-5 leading-7 lg:text-lg text-sm sm:text-base">
            Living In Full Expression Foundation embarked on an outreach on the
            16th of December 2022 to some secondary schools. GYB Model Science
            School, Crowther Memorial College, Muslim Community secondary school
            and Bishop Delise School in Lokoja, Kogi State.
          </p>
          <Link to={"/blog/1"}>
            <button className="mt-5 report-button flex flex-row items-center gap-2 justify-between lg:text-lg text-sm sm:text-base p-2.5 text-yellow-300 border-2 border-yellow-300 rounded-md transition-all delay-100 ease-in hover:text-white hover:bg-yellow-300 focus:bg-yellow-400 focus:text-white">
              Read the full report
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.125 4.69994L19.725 11.2999C19.825 11.3999 19.896 11.5083 19.938 11.6249C19.98 11.7416 20.0007 11.8666 20 11.9999C20 12.1333 19.979 12.2583 19.937 12.3749C19.895 12.4916 19.8243 12.5999 19.725 12.6999L13.125 19.2999C12.9417 19.4833 12.7123 19.5789 12.437 19.5869C12.1617 19.5949 11.9243 19.4993 11.725 19.2999C11.525 19.1166 11.4207 18.8873 11.412 18.6119C11.4033 18.3366 11.4993 18.0993 11.7 17.8999L16.6 12.9999L5.42498 12.9999C5.14165 12.9999 4.90399 12.9039 4.71199 12.7119C4.51998 12.5199 4.42432 12.2826 4.42498 11.9999C4.42498 11.7166 4.52065 11.4789 4.71199 11.2869C4.90332 11.0949 5.14098 10.9993 5.42498 10.9999L16.6 10.9999L11.7 6.09994C11.5167 5.91661 11.4207 5.68327 11.412 5.39994C11.4033 5.1166 11.4993 4.88327 11.7 4.69994C11.8833 4.49994 12.1167 4.39994 12.4 4.39994C12.6833 4.39994 12.925 4.49994 13.125 4.69994Z"
                  fill="#ffc034"
                />
              </svg>
            </button>
          </Link>
        </div>
        <img src={Pic5} alt="pic-1" className="w-full h-full" />
      </section>
      {/* Read our blog */}
      <section className="text-center mt-20 px-4 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl">Read our blog</h2>
        <p className="lg:text-lg text-sm sm:text-base mt-2 text-gray-600">
          Get updates from events and read inspiring stories from people we have
          engaged with.
        </p>
        <div className="flex flex-col justify-between-items-center">
          <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4 mt-6">
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
          </div>
        </div>
        <Link to="/blog">
          <button className="p-3 mt-20 lg:text-lg text-sm sm:text-base bg-yellow-300 text-white border-2 border-yellow-300 rounded-md transition-all delay-100 ease-in hover:bg-yellow-400  hover:border-yellow-400 focus:bg-yellow-500 focus:border-yellow-500">
            View our blog articles
          </button>
        </Link>
      </section>
      {/* Sign up to our newsletter */}
      <NewsLetter leaveSpace={true} />
      <Footer />
    </main>
  );
};

export default Home;
