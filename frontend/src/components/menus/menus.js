import React from 'react';
import "./menus.css";
import { FaInfoCircle } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { RiMedalLine } from "react-icons/ri";
import { RiContactsBook3Fill } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";

function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function Menus(props) {
    return (
        <div>
            {props.toggle ?
                (
                    <div className='menu-page-profile-pic'>
                        <img src="https://photosnow.org/wp-content/uploads/2024/04/no-dp-mood-off_9.jpg" />
                    </div>
                ) :
                (
                    <div className='menu-page-profile-pic-toggle'>
                        <img src="https://photosnow.org/wp-content/uploads/2024/04/no-dp-mood-off_9.jpg" />
                    </div>
                )
            }
            <div className='nav-items'>
                {props.toggle ?
                    (
                        <div className='rocket'>
                            <div className='nav-item'>
                                <div className='nav-link' onClick={() => scrollToElement("about")}>
                                    <FaInfoCircle />
                                    About
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link' onClick={() => scrollToElement("education")}>
                                    <IoSchool />
                                    Education
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link' onClick={() => scrollToElement("skills")}>
                                    <FaTools />
                                    Skills
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link' onClick={() => scrollToElement("projects")}>
                                    <FaLaptopCode />
                                    Projects
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link' onClick={() => scrollToElement("internship")}>
                                    <MdOutlineWork />
                                    Internship
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link' onClick={() => scrollToElement("certification")}>
                                    <PiCertificateBold />
                                    Certifications
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link' onClick={() => scrollToElement("achievements")}>
                                    <RiMedalLine />
                                    Achievements
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link' onClick={() => scrollToElement("activities")}>
                                    <RiTeamLine />
                                    Extra Curricular Activities
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link' onClick={() => scrollToElement("contact")}>
                                    <RiContactsBook3Fill />
                                    Contact
                                </div>
                            </div>
                        </div>
                    ) :
                    (
                        <div className='rocket-toggle'>
                            <div className='nav-item-toggle'>
                                <div className='nav-link' onClick={() => scrollToElement("about")}>
                                    <FaInfoCircle />
                                </div>
                            </div>
                            <div className='nav-item-toggle'>
                                <div className='nav-link' onClick={() => scrollToElement("education")}>
                                    <IoSchool />
                                </div>
                            </div>
                            <div className='nav-item-toggle'>
                                <div className='nav-link' onClick={() => scrollToElement("skills")}>
                                    <FaTools />
                                </div>
                            </div>
                            <div className='nav-item-toggle'>
                                <div className='nav-link' onClick={() => scrollToElement("projects")}>
                                    <FaLaptopCode />
                                </div>
                            </div>
                            <div className='nav-item-toggle'>
                                <div className='nav-link' onClick={() => scrollToElement("internship")}>
                                    <MdOutlineWork />
                                </div>
                            </div>
                            <div className='nav-item-toggle'>
                                <div className='nav-link' onClick={() => scrollToElement("certifications")}>
                                    <PiCertificateBold />
                                </div>
                            </div>
                            <div className='nav-item-toggle'>
                                <div className='nav-link' onClick={() => scrollToElement("achievements")}>
                                    <RiMedalLine />
                                </div>
                            </div>
                            <div className='nav-item-toggle'>
                                <div className='nav-link' onClick={() => scrollToElement("activities")}>
                                    <RiTeamLine />
                                </div>
                            </div>
                            <div className='nav-item-toggle'>
                                <div className='nav-link' onClick={() => scrollToElement("contact")}>
                                    <RiContactsBook3Fill />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Menus;
