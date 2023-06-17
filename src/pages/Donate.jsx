import React from "react";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Pic17 from "../assets/image/pic-17.png";
import Pic25 from "../assets/image/pic-25.png";
import Banner from "../components/Banner";
import { FlexBlock } from "../components/Blocks";

const Donate = () => {
  return (
    <>
      <Header />
      <Banner image={Pic17} text={"DONATE"} />
      <section className="px-4 md:px-8">
        <FlexBlock
          image={Pic25}
          heading={"Get in Touch"}
          text={
            "These funds are used to create a lasting impact and a difference in the lives of those in need. By donating, individuals can contribute to the betterment of society and make a significant difference in the world. Every donation, no matter how small, can help us achieve its goals and bring hope to those in need."
          }
          reverse={false}
        />
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Donate;
