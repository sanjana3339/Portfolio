import React,{ useState, useEffect } from 'react';
import './mobile.css';
import { IoMdMenu } from "react-icons/io";
import { AiOutlineMenuFold } from "react-icons/ai";
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

function Mobile()
{
    const [open,setOpen]=useState(false)
    const [activeSection, setActiveSection] = useState("");

    const handleClick = (id) => {
        setActiveSection(id);
        scrollToElement(id);
        setOpen(false);
    };

    useEffect(() => {
        const sections = ["about", "education", "skills", "projects", "internship", "certification", "achievements", "activities", "contact"];
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    const handleOpen=()=>
    {
        setOpen(!open);
    };

return(
    <div>
        <div className='mobile-nav'>
            <div className='mobile-nav-header'>
                <span className='mobile-header-icon' onClick={handleOpen}>
                    {open?<AiOutlineMenuFold size={37}/>:<IoMdMenu size={37}/>}
                </span>
                <span className='mobile-title'>My Portfolio App</span>
            </div>
            {open? 
            <div className='mobile-menu'>
                            {["about", "education", "skills", "projects", "internship", "certification", "achievements", "activities", "contact"].map(section => (
                                <div key={section} className={`nav-item ${activeSection === section ? "active" : ""}`}>
                                    <div className='nav-link'  onClick={() => handleClick(section)}>
                                        {getIcon(section)}
                                        {getLabel(section)}
                                    </div>
                                </div>
                            ))}
            </div>
            :""}
        </div>
    </div>
)

}

function getIcon(section) {
    switch (section) {
        case "about": return <FaInfoCircle />;
        case "education": return <IoSchool />;
        case "skills": return <FaTools />;
        case "projects": return <FaLaptopCode />;
        case "internship": return <MdOutlineWork />;
        case "certification": return <PiCertificateBold />;
        case "achievements": return <RiMedalLine />;
        case "activities": return <RiTeamLine />;
        case "contact": return <RiContactsBook3Fill />;
        default: return null;
    }
}

function getLabel(section) {
    switch (section) {
        case "about": return "About";
        case "education": return "Education";
        case "skills": return "Skills";
        case "projects": return "Projects";
        case "internship": return "Internship";
        case "certification": return "Certifications";
        case "achievements": return "Achievements";
        case "activities": return "Extra Curricular Activities";
        case "contact": return "Contact";
        default: return "";
    }
}

export default Mobile;