import React from "react";
import Logo from "../assets/image/logo.png";
import "../scss/styles.scss";
import Menu from "../assets/svg/menu.svg";
import CloseMenu from "../assets/svg/cancel.svg";
import { Link, NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => (isActive ? "active" : "");

const Links = ({ to, title }) => {
  return (
    <NavLink to={to} className={`${activeLink} hover:text-yellow-300`}>
      <li>{title}</li>
    </NavLink>
  );
};

const Header = () => {
  const showMenu = () => {
    document.getElementById("menu").style.height = "100%";
  };

  /* Close */
  const closeNav = () => {
    document.getElementById("menu").style.height = "0%";
  };
  return (
    <header className="bg-white py-4 fixed w-full z-20 top-0 left-0 px-4 md:px-8 flex flex-row justify-between lg:gap-4 items-center header">
      <Link to="/">
        <div className="w-24">
          <img src={Logo} alt="Life Foundation Logo" />
        </div>
      </Link>
      <div className="block md:hidden cursor-pointer" onClick={showMenu}>
        <img src={Menu} alt="menu-icon" />
      </div>
      <div className="menu-content" id="menu" onClick={closeNav}>
        <div
          className="md:hidden block close cursor-pointer"
          onClick={closeNav}
        >
          <img src={CloseMenu} alt="close-menu-icon" />
        </div>
        <ul className="md:flex mobile-menu flex-none block flex-row justify-between md:gap-7 lg:gap-9 items-center cursor-pointer">
          <Links to="/" title={"Home"} />
          <Links to="/about-us" title={"About us"} />
          <Links to="/our-team" title={"Our Team"} />
          <Links to="/blog" title={"Blog"} />
          <Links to="/contact-us" title={"Contact us"} />
          <Link to="/donate">
            <button className="block lg:text-lg text-sm sm:text-base md:hidden p-2.5 text-yellow-300 border-2 border-yellow-300 rounded-md transition-all delay-100 ease-in hover:text-white hover:bg-yellow-300 focus:bg-yellow-400 focus:text-white">
              Donate Today
            </button>
          </Link>
        </ul>
      </div>
      <Link to="/donate" className="md:block hidden">
        <button className="lg:text-lg text-sm sm:text-base p-2.5 text-yellow-300 border-2 border-yellow-300 rounded-md transition-all delay-100 ease-in hover:text-white hover:bg-yellow-300 focus:bg-yellow-400 focus:text-white focus:border-yellow-400">
          Donate Today
        </button>
      </Link>
    </header>
  );
};

export default Header;
