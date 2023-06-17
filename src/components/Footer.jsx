import React from "react";
import Logo from "../assets/image/logo.png";
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import "../scss/Navigate.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-300 px-4 py-8 md:px-8">
      <div className="flex flex-row footer justify-between gap-8 items-start">
        <div className="md:w-1/3 logo-text">
          <Link to="/">
            <div className="w-28">
              <img src={Logo} alt="Life Foundation Logo" />
            </div>
          </Link>
          <p className="text-base mt-3">
            Living in Full Expression (LIFE) foundation aims to provide hope to
            the hopeless, the less privileged and the downtrodden in society.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-16 items-start footer-text">
          <div>
            <h4>Resources</h4>
            <p>Events</p>
            <p>Projects</p>
            <p>Apply</p>
            <p>Meet our team</p>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="flex flex-row mt-4 gap-2 items-center flex-wrap">
              <BsFillTelephoneFill size={20} color="#02319D" />{" "}
              <a href="tel:07067844491">07067844491</a>,{" "}
              <a href="tel:09031988861">09031988861</a>
            </div>
            <div className="flex mt-4 flex-row gap-2 items-center flex-wrap">
              <GrMail size={20} color="#02319D" />
              <a href="mailto:Livinginfullexpression1@gmail.com">
                Livinginfullexpression1@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h4>Follow us</h4>
            <div className="flex flex-row gap-6 justify-center mt-4 items-center cursor-pointer">
              <BsFacebook size={20} color="#02319D" />
              <BsTwitter size={20} color="#02319D" />
              <BsInstagram size={20} color="#02319D" />
              <BsLinkedin size={20} color="#02319D" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-base mt-16 text-center">
        Copyright &copy; 2023 All rights reserved | LIFE Foundation
      </p>
    </footer>
  );
};

export default Footer;
