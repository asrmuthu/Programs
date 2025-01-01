import React from "react";
import muthu_image from "../muthu_image.jpg";
import resume from "../Muthupandi_raj_resume.pdf";
import { GrLocation } from "react-icons/gr";
import { FaMobileRetro } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";

const Header = () => {
const download = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Muthupandi_Raj_Resume.pdf";
    link.click();
};

return (
    <div>
        <header className="header">
            <hgroup className="hgroup">
                <img src={muthu_image} className="muthu_image" alt="logo" />
                <h1>Muthupandi Raj</h1>
                <h2>Engineering Lead</h2>
                <div className="social">
                    <a href="https://www.linkedin.com/feed/">
                        <AiFillLinkedin />
                    </a>
                    <a href="https://github.com/asrmuthu/Programs/tree/main/Programs">
                        <AiFillGithub />
                    </a>
                </div>
                <p className="context">CONTACT:</p>
                <div className="contact-info">
                    <a href="https://www.google.com/maps/dir//2GRC%2BMFX+Dr+Renuka+house,+Ammapuram,+Vadaveeranaickenpatty,+Tamil+Nadu+625531/@10.0417768,77.5218165,18z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3b076b32cf3f47df:0xf75546fba35fd7c5!2m2!1d77.5212575!2d10.0417723!3e0?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                        <GrLocation />
                        Theni, Tamil Nadu, India.
                    </a>
                    <a href="tel:7904688429">
                        <FaMobileRetro />
                        7904688429
                    </a>
                    <a href="mailto:asrmuthu57@gmail.com">
                        <AiFillMail />
                        asrmuthu57@gmail.com
                    </a>
                </div>
                <button onClick={download}><AiOutlineDownload />Download</button>
            </hgroup>
        </header>
    </div>
);
};

export default Header;
