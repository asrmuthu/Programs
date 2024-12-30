import React from "react";
import muthu_image from "../muthu_image.jpg";
import { GrLocation } from "react-icons/gr";
import { FaMobileRetro } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Header = () => {
return (
    <div>
        <header className="header">
            <hgroup className="hgroup">
                <img src={muthu_image} className="muthu_image" alt="logo" />
                <h1>Muthupandi Raj</h1>
                <h2>Engineering Lead</h2>
                <div className="social">
                    <a href="https://www.linkedin.com/feed/"><AiFillLinkedin /></a>
                    <a href="https://github.com/asrmuthu/Programs/tree/main/Programs"><AiFillGithub /></a>
                </div>
                <p className="context">CONTACT:</p>
                <p className="contact-info"><GrLocation /> Theni, Tamil Nadu, India.</p>
                <p className="contact-info"><FaMobileRetro /> 7904688429</p>
                <p className="contact-info"><AiFillMail /> asrmuthu57@gmail.com</p>
            </hgroup>
        </header>
    </div>
);
};

export default Header;
