import React, { useEffect } from "react";
import Header from "../components/Header";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Pic9 from "../assets/image/pic-9.png";
import Pic33 from "../assets/image/pic-33.png";
import Pic34 from "../assets/image/pic-34.png";
import Pic35 from "../assets/image/pic-35.png";
import Pic36 from "../assets/image/pic-36.png";
import Pic37 from "../assets/image/pic-37.png";
import Pic38 from "../assets/image/pic-38.png";
import Pic39 from "../assets/image/pic-39.png";
import Pic40 from "../assets/image/pic-40.png";
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
          marginT={true}
        />

        <TeamMemberBlock
          image={Pic39}
          name={"Comfort Adegbola"}
          bio={`Comfort Adegbola is a medical doctor by training and a teenager's mentor at heart. She is the co-founder of the LIFE foundation and has passionately pursued her passion for empowering lives. Comfort graduated from the University of Ibadan medical school and practiced in the university health system in Kogi state before relocating to Canada. She is a mother, a doctor, a mentor, a fashion designer, a tutor, and much more.`}
          marginT={true}
        />

        <TeamMemberBlock
          image={Pic34}
          name={"King Ibileye"}
          bio={`King Ibileye is a first-class graduate of Biochemistry from Bowen University. He is passionate about education, mental health, and adolescent health. 

He has expressed his passion through his work experience at the Society for family health (SFH) under the Adolescent 360(A360) project: a project that aims to develop new and innovative approaches for designing programs to improve the sexual and reproductive health of adolescent girls aged 15 -19 years.

He is skilled at data analysis. His hobbies are reading and video editing.`}
          marginT={true}
        />

        <TeamMemberBlock
          image={Pic35}
          name={"Abubakar Morenike"}
          bio={`Abubakar Morenike Marian is a graduate of Federal University Lokoja, with a bachelors degree in History and International Studies. She is a skilled fashion designer, a writer and a digital creator.

She has passion for young people and this has propelled her to volunteer with organizations for that course. While in school, she volunteered with a group to enlighten young girls in rural areas about sex education and also distribute hygiene items ( sanitary pads).
She creates pictorial contents on social media to encourage young people, reassure them of God’s love, and build their self esteem through positive affirmations and scriptures.
Her hobbies are photography and reading.`}
          marginT={true}
        />

        <TeamMemberBlock
          image={Pic36}
          name={"Rhoda Adeboboye"}
          bio={`Rhoda Adeboboye is a graduate of Ahmadu Bello  University. She studied English Language Education.

She is a language teacher in Schools, where she has taught  with a passion for young ones and youths as regards academics and career.

She is also passionate about children and their welfare. 

Her hobbies are singing, reading, meeting the needs of less privileged especially children, teaching etc.`}
          marginT={true}
        />

        <TeamMemberBlock
          image={Pic37}
          name={"Adams Adeiza Matthew"}
          bio={`Adams Adeiza Matthew (KENT) is a graduate of political science from the Federal University Lokoja, and he is passionate about leadership, community development, and talent development. He has demonstrated his leadership skills on various platforms, showcasing his dedication to making a positive impact.
One of the notable positions Adams has held is the Coordinator of Kogi State for the Young African Leadership Initiative (YALI), additionally, Adams served as the Chairman of the Student Covid-19 Taskforce in 2020.
His passion for empowering young leaders, promoting gender equality, and utilizing his skills for positive change indicates a dedication to making a difference in society.`}
          marginT={true}
        />

        <TeamMemberBlock
          image={Pic38}
          name={"Boboye Gabriel"}
          bio={`Boboye Gabriel is a graduate of Guidance & Counseling/Political Science from the University of Ibadan. A specialist in Special Education for the Gifted & Talented from the Federal College of Education(Special).

He is passionate about 21st-century education, counseling/psychological state of mind, & academic performance of learners. His passion has been proven via productive testimonies in his over 10 years work of experience as a counseling Psychologist, Academic Vice Principal, School counselor & School Principal.
His hobbies are writing, reading, and preaching the Gospel of Christ.`}
          marginT={true}
        />

        <TeamMemberBlock
          image={Pic40}
          name={"Olumide Damilare Yusuf"}
          bio={`Olumide Damilare Yusuf is a final year student of English and Literary Studies in Federal University Lokoja. Enthusiastic about the spiritual growth of teenagers. The teenage years are marked with wonderful experiences but delicate stage with slippery steps.
He was involved in teenage conferences as a coordinator organized by his church. The conference is aimed at equipping teenagers on how to stay guarded about their social life balanced with their spiritual life. He is a writer. His hobbies are writing, reading and playing football.`}
          marginT={true}
        />
      </section>
      <NewsLetter leaveSpace={true} />
      <Footer />
    </div>
  );
};

export default OurTeam;
