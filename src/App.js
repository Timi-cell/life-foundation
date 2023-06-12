import React, { useState } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";

const App = () => {
  const [display, setDisplay] = useState("none");

  const scrollFunc = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };
  window.onscroll = function () {
    scrollFunc();
  };
  const TopFunc = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <BrowserRouter>
      <button
        onClick={TopFunc}
        className={`px-2 py-3 hidden fixed bottom-20 right-5 z-50 cursor-pointer bg-yellow-300 text-white border-2 border-yellow-300 rounded-md transition-all delay-100 ease-in hover:bg-yellow-400  hover:border-yellow-400 focus:bg-yellow-500 focus:border-yellow-500 ${
          display === "none" ? "" : "show"
        }`}
      >
        <MdOutlineArrowUpward size={25} color="#fff" />
      </button>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
};
export default App;
