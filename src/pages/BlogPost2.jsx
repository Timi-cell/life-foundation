import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BlogsPostBlock } from "../components/Blocks";
import Pic45 from "../assets/image/pic-45.png";
import Pic43 from "../assets/image/pic-43.png";
import Pic44 from "../assets/image/pic-44.png";
import Pic46 from "../assets/image/pic-46.png"; 
import Pic47 from "../assets/image/pic-47.png"; 
import NewsLetter from "../components/NewsLetter";

const BlogPost2 = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div>
      <Header />
     <BlogsPostBlock smallTitle={"On our mission to change lives..."} 
     image1={Pic45}
     title = {"On our mission to change lives"} 
     
     text1 = {`On the 16th of December 2022, Living In Full Expression Foundation embarked on a significant outreach to various secondary schools in Lokoja, Kogi State. The primary objective of this outreach was to extend scholarships to deserving students. The schools visited were GYB Model Science School, Crowther Memorial College, Muslim Community Secondary School, and Bishop Delise School.`}

     image2={Pic43}
     image3={Pic47}

     text2 = {`Before the outreach, the Foundation had engaged with four schools, conducting interviews to select eleven students for the scholarship program. These lucky recipients would have their SSCE (WAEC) fees fully covered. Among the beneficiaries, two students from GYB Model Science School were awarded scholarships: Ebute Marvellous and Joseph Favour. Additionally, Crowther Memorial College had four recipients: Ajiboye Favour, Folorunsho Samuel, Noah Sarah, and Daniel Juliana. Muslim Community School saw the scholarship granted to Ejikeme Divine Favour and Musa Mohammed, while Bishop Delise School had three deserving students named Akubo Abigail, Joseph Agah, and Ayodele Esther.

The reception from the schools was heartwarming as the Foundation was warmly welcomed. During each school's assembly, the scholarship presentations were made to the selected students, and all students were encouraged to strive for academic excellence.

The students and school management expressed their profound gratitude to the Foundation for this thoughtful initiative, which undoubtedly brought joy and hope to the beneficiaries' lives. The event left a positive impact, inspiring the students to work harder towards their educational goals.

In conclusion, the outreach by Living In Full Expression Foundation was a resounding success, leaving a lasting impression on the students and school communities. Such endeavors of spreading educational opportunities and encouragement are commendable and hold great significance in shaping the future of young minds.

`}

     image4={Pic46}
     image5={Pic44}

    
     />
     
    <NewsLetter />

      <Footer />
    </div>
  );
};

export default BlogPost2;
