import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BlogsPostBlock } from "../components/Blocks";
import Pic18 from "../assets/image/pic-18.png";
import Pic41 from "../assets/image/pic-41.png";
import Pic42 from "../assets/image/pic-42.png";
import NewsLetter from "../components/NewsLetter";

const BlogPost = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div>
      <Header />
     <BlogsPostBlock smallTitle={"Empowering the younger generation..."} 
     image1={Pic18}
     title = {"Empowering the younger generation"} 
     
     text1 = {`Living In Full Expression Foundation embarked on an outreach on the 16th of December 2022 to some secondary schools, namely: GYB Model Science School, Crowther Memorial College, Muslim Community secondary school and Bishop Delise School in Lokoja, Kogi State. Prior to the date, four(4) schools were reached out to and eleven(11) students qualified to receive a scholarship from the foundation after being interviewed. The scholarship entails the full payment of the students SSCE (WAEC) fee. Specifically, two students from GYB Model Science school won the scholarship i.e Ebute Marvellous and Joseph Favour.`}

     image2={Pic41}
     image3={Pic42}

     text2 = {`Also, four students won the scholarship from Crowther Memorial College which are; Ajiboye Favour, Folorunsho Samuel, Noah Sarah and Daniel Juliana. Ejikeme Divine Favour and Musa Mohammed got the scholarship from Muslim Community school and finally, three students got the scholarship from Bishop Delise school. They include; Akubo Abigail, Joseph Agah and Ayodele Esther. 

    The Foundation was well received by the schools. At each school, the scholarship was presented to the selected students on the assembly ground and the entire students were admonished to work hard even more on their studies so as to come out with excellent results.

    The students and the school management were filled with joy and they expressed their appreciation to the foundation.`}

    
     />
     
    <NewsLetter />

      <Footer />
    </div>
  );
};

export default BlogPost;
