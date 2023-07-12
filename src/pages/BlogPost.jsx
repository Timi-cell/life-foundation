import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogPost = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div>
      <Header />
      <div>BlogPost</div>
      <Footer />
    </div>
  );
};

export default BlogPost;
