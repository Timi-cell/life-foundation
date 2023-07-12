import React, { useEffect } from "react";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Pic9 from "../assets/image/pic-9.png";
import Pic33 from "../assets/image/pic-33.png";
import { TeamMemberBlock } from "../components/Blocks";
import Banner from "../components/Banner";

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-300">
      <Header />
      <Banner image={Pic9} text={"MEET THE TEAM"} />
      <section className="px-4 md:px-8 mt-10 md:mt-20">
        <TeamMemberBlock
          image={Pic33}
          name={"Isaac Adegbola"}
          bio={`Isaac Adegbola is a dentist by profession, a helper of destinies by calling, and a passionate believer in the ability of God to transform a life. He rose from the gutters of ogunpa to the top of his profession with the help of God. He has since dedicated his life to helping people live in the fullness of their destinies by providing the lift and help that they need to scale above the barriers of life. Isaac has mentored numerous teenagers who have gone ahead to be shining lights for God in their generation. Isaac received the vision of LIFE foundation alongside his lovely wife, and together, they have been working on enacting the vision maximally. Isaac is happily married with children by the grace of God, and they currently live in Nigeria, Canada, and the United States.`}
          marginT={false}
        />
        <TeamMemberBlock
          image={Pic33}
          name={"Isaac Adegbola"}
          bio={`Isaac Adegbola is a dentist by profession, a helper of destinies by calling, and a passionate believer in the ability of God to transform a life. He rose from the gutters of ogunpa to the top of his profession with the help of God. He has since dedicated his life to helping people live in the fullness of their destinies by providing the lift and help that they need to scale above the barriers of life. Isaac has mentored numerous teenagers who have gone ahead to be shining lights for God in their generation. Isaac received the vision of LIFE foundation alongside his lovely wife, and together, they have been working on enacting the vision maximally. Isaac is happily married with children by the grace of God, and they currently live in Nigeria, Canada, and the United States.`}
          marginT={true}
        />
      </section>
      <NewsLetter leaveSpace={false} />
      <Footer />
    </div>
  );
};

export default OurTeam;
