import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Pic17 from "../assets/image/pic-17.png";
import Banner from "../components/Banner";


const GetInvolvedForm = () => {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <div>
      <Header />
      {/* Banner */}
      <Banner image={Pic17} text={"GET INVOLVED"} />
     
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default GetInvolvedForm;
