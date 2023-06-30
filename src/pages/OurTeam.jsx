import React, { useEffect } from "react";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <NewsLetter leaveSpace={true} />
      <Footer />
    </>
  );
};

export default OurTeam;
