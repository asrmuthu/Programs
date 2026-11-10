import React from "react";
import muthu_image from "../muthu_image.jpg";
import resume from "../Muthupandi_Raj_Resume.pdf";
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
        <aside className="profile-sidebar">
            <header className="profile-card">
                <img src={muthu_image} className="muthu_image" alt="Muthupandi Raj" />
                <p className="profile-kicker">PORTFOLIO · 2026</p>
                <h1>Muthupandi Raj</h1>
                <p className="profile-role">Frontend Engineering Lead</p>
                <p className="profile-location"><GrLocation /> Tamil Nadu, India</p>
                <div className="social">
                    <a href="https://www.linkedin.com/in/muthu-r-287392207/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <AiFillLinkedin />
                    </a>
                    <a href="https://github.com/asrmuthu/Programs/tree/main/Programs" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <AiFillGithub />
                    </a>
                </div>
                <div className="contact-info">
                    <a href="tel:7904688429">
                        <FaMobileRetro />
                        <span>7904688429</span>
                    </a>
                    <a href="mailto:muthupandiraj1911@gmail.com">
                        <AiFillMail />
                        <span>muthupandiraj1911@gmail.com</span>
                    </a>
                </div>
                <button className="download-button" onClick={download}>
                    <AiOutlineDownload /> Download resume
                </button>
                <nav className="profile-nav" aria-label="Resume sections">
                    <a href="#highlights">Highlights</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#websites">Websites</a>
                    <a href="#more">Education & more</a>
                </nav>
            </header>
        </aside>
    );
};

export default Header;
