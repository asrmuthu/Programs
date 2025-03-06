import React from "react";
import header_img from "../assets/bhive_logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import "../"

const Header = () => {
  return (
    <div className="header">
      <img src={header_img} alt="logo" />
      <a href="tel:7904688429">
        <span className="phone-icon">
        <FaPhoneAlt style={{color:"f39c12"}}/>
        </span>
      </a>
    </div>
  );
};

export default Header;
