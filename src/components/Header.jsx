import React from "react";
import Logo from "../assets/svg/life-logo.svg";
import "./Header.scss";
import Menu from "../assets/svg/menu.svg";
import CloseMenu from "../assets/svg/cancel.svg";

const Header = () => {
  const showMenu = () => {
    document.getElementById("menu").style.height = "100%";
  };

  /* Close */
  const closeNav = () => {
    document.getElementById("menu").style.height = "0%";
  };
  return (
    <div className="py-4 px-8 flex flex-row justify-between lg:gap-4 items-center header">
      <div className="w-24">
        <img src={Logo} alt="Life Foundation Logo" />
      </div>
      <div className="block md:hidden cursor-pointer" onClick={showMenu}>
        <img src={Menu} alt="menu-icon" />
      </div>
      <div className="menu-content" id="menu">
        <div
          className="md:hidden block close cursor-pointer"
          onClick={closeNav}
        >
          <img src={CloseMenu} alt="close-menu-icon" />
        </div>
        <ul className="md:flex mobile-menu flex-none block flex-row justify-between md:gap-7 lg:gap-9 items-center cursor-pointer">
          <li>Home</li>
          <li>About us</li>
          <li>Our Projects</li>
          <li>Blog</li>
          <li>Contact us</li>
          <button className="block lg:text-lg text-sm sm:text-base md:hidden p-2.5 text-yellow-300 border-2 border-yellow-300 rounded-md transition-all delay-100 ease-in hover:text-white hover:bg-yellow-300 focus:bg-yellow-400 focus:text-white">
            Donate Today
          </button>
        </ul>
      </div>
      <button className="md:block lg:text-lg text-sm sm:text-base hidden p-2.5 text-yellow-300 border-2 border-yellow-300 rounded-md transition-all delay-100 ease-in hover:text-white hover:bg-yellow-300 focus:bg-yellow-400 focus:text-white focus:border-yellow-400">
        Donate Today
      </button>
    </div>
  );
};

export default Header;
