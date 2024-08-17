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

function Menus(props)
{
return(
    <div>
    {
        props.toggle?
        (<div className='menu-page-profile-pic'>
            <img src="https://photosnow.org/wp-content/uploads/2024/04/no-dp-mood-off_9.jpg"/>
        </div>):
        (
        <div className='menu-page-profile-pic-toggle'>
            <img src="https://photosnow.org/wp-content/uploads/2024/04/no-dp-mood-off_9.jpg"/>
        </div>
        )
    }
    <div className='nav-items'>
    {
        props.toggle?
        (
        <div className='rocket'><div className='nav-item'>
            <div className='nav-link'>
            <FaInfoCircle/>
            About
            </div>
        </div>
        <div className='nav-item'>
            <div className='nav-link'>
            <IoSchool/>
            Education
            </div>
        </div>
        <div className='nav-item'>
            <div className='nav-link'>
            <FaTools/>
            Skills
            </div>
        </div>
        <div className='nav-item'>
            <div className='nav-link'>
            <FaLaptopCode/>
            Projects
            </div>
        </div>
        <div className='nav-item'>
            <div className='nav-link'>
            <MdOutlineWork/>
            Internship
            </div>
        </div>
        <div className='nav-item'>
            <div className='nav-link'>
            <PiCertificateBold/>
            Certifications
            </div>
        </div>
        <div className='nav-item'>
            <div className='nav-link'>
            <RiMedalLine/>
            Achievements
            </div>
        </div>
        <div className='nav-item'>
            <div className='nav-link'>
            <RiTeamLine/>
            Extra Curricular Activities
            </div>
        </div>
        <div className='nav-item'>
            <div className='nav-link'>
            <RiContactsBook3Fill/>
            Contact
            </div>
        </div>
        </div>):
        (
        <div className='rocket-toggle'>
        <div className='nav-item-toggle'>
            <div className='nav-link'>
            <FaInfoCircle/>
            </div>
        </div>
        <div className='nav-item-toggle'>
            <div className='nav-link'>
            <IoSchool/>
            </div>
        </div>
        <div className='nav-item-toggle'>
            <div className='nav-link'>
            <FaTools/>
            </div>
        </div>
        <div className='nav-item-toggle'>
            <div className='nav-link'>
            <FaLaptopCode/>
            </div>
        </div>
        <div className='nav-item-toggle'>
            <div className='nav-link'>
            <MdOutlineWork/>
            </div>
        </div>
        <div className='nav-item-toggle'>
            <div className='nav-link'>
            <PiCertificateBold/>
            </div>
        </div>
        <div className='nav-item-toggle'>
            <div className='nav-link'>
            <RiMedalLine/>
            </div>
        </div>
        <div className='nav-item-toggle'>
            <div className='nav-link'>
            <RiTeamLine/>
            </div>
        </div>
        <div className='nav-item-toggle'>
            <div className='nav-link'>
            <RiContactsBook3Fill/>
            </div>
        </div>
        </div>
        )

    }
        
    </div>
    </div>
)

}

export default Menus;