import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Pic17 from "../assets/image/pic-17.png";
import Pic21 from "../assets/image/pic-21.png";
import Pic22 from "../assets/image/pic-22.png";
import Pic23 from "../assets/image/pic-23.png";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { FlexBlock } from "../components/Blocks";


const GetInvolved = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      {/* Banner */}
      <Banner image={Pic17} text={"GET INVOLVED"} />
      {/* Flex boxes block */}
      <section className="px-4 md:px-8">
        <FlexBlock
          image={Pic21}
          heading={"Donate Today"}
          text={
            "At our charity foundation, we rely on the generosity of donors like you to help us make a positive impact in the world. Whether you choose to make a one-time donation or set up a recurring monthly donation. With your help, we can continue to make a difference in the lives of countless individuals and families, and work towards a brighter future for all."
          }
          reverse={false}
        />
        <FlexBlock
          image={Pic22}
          heading={"Volunteer"}
          text={
            "We rely on the support and dedication of volunteers like you to help us make a difference in the world. As a volunteer, you will have the opportunity to work closely with our team and contribute to our mission in a meaningful way. We offer a range of volunteer opportunities, from event coordination and fundraising to community outreach and program support."
          }
          reverse={true}
        />
        <FlexBlock
          image={Pic23}
          heading={"Partner with us"}
          text={
            "We believe that collaboration is key to making a lasting impact in the world. We welcome partnerships with individuals, corporations, and other organizations who share our commitment to creating positive change. As a partner, you will be recognized for your contribution and have the satisfaction of knowing that you are making a difference in the lives of those in need."
          }
          reverse={false}
        />
      </section>
      {/* Fill the form */}
      <section className="my-10 md:my-20">
        <div className="text-center p-8 md:p-10 bg-blue-800 h-full w-full">
          <h2 className="text-xl md:text-2xl text-white">
            To show interest, fill the form and get involved today in our
            mission of saving lives.
          </h2>
          <Link to="/get-involved/form">
            <button className="lg:text-lg mt-5  text-sm sm:text-base p-2.5 text-yellow-300 border-2 border-yellow-300 rounded-md transition-all delay-100 ease-in hover:text-white hover:bg-yellow-300 focus:bg-yellow-400 focus:text-white focus:border-yellow-400">
              Fill the Form
            </button>
          </Link>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default GetInvolved;
