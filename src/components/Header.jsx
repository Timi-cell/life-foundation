import React from "react";
import Logo from "../assets/svg/life-logo.svg";
import "./Header.scss";
import { Button } from "flowbite-react";

const Header = () => {
  return (
    <div className="py-4 flex flex-row justify-between gap-4 items-center header">
      <div className="w-24">
        <img src={Logo} alt="Life Foundation Logo" />
      </div>
      <ul className="flex flex-row justify-between gap-9 items-center cursor-pointer">
        <li>Home</li>
        <li>About us</li>
        <li>Our Projects</li>
        <li>Blog</li>
        <li>Contact us</li>
      </ul>
      <button>Donate Today</button>
    </div>
  );
};

export default Header;
