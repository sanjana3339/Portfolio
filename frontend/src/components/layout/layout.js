import React, {useState} from 'react';
import About from '../../pages/about/about';
import Menu from '../menus/menus';
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Skills from '../../pages/skills/skills';
import './layout.css'
import Projects from '../../pages/projects/projects';
import Certification from '../../pages/certification/certification';
import Education from '../../pages/education/education';
import Achievements from '../../pages/achievements/achievements';
import Internship from '../../pages/internship/internship';
import Activities from '../../pages/activities/activities';
import Contact from '../../pages/contact/contact';
import { useEffect } from 'react';
import Mobile from '../mobile-navbar/mobile';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout()
{
    const[toggle,setToggle]=useState(false)
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1540) {
                setToggle(false); // Collapse sidebar on larger screens
            } 
        };

        window.addEventListener('resize', handleResize);

        // Run the handler once on mount to set the initial state
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
return(
    <div>
        <ToastContainer/>
         <Mobile/>
        <div className='sidebar-section'>
           
            <div className={toggle?'sidebar-toggle':'sidebar'}>
            
                <div className='sidebar-toggle-icons'>
                    <p onClick={handleToggle}>
                        {toggle?
                        (<AiOutlineDoubleLeft size={30}/>):
                        (<AiOutlineDoubleRight size={30}/>)}
                    
                    </p>
                </div>
                <Menu toggle={toggle}/> 
            </div>
            <div className='container'>
                <div id="about">
                    <About />
                </div>
                <div id="education">
                    <Education />
                </div>
                <div id="skills">
                    <Skills />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <div id="internship">
                    <Internship />
                </div>
                <div id="certifications">
                    <Certification />
                </div>
                <div id="achievements">
                    <Achievements />
                </div>
                <div id="activities">
                    <Activities />
                </div>
                <div id="contact">
                    <Contact />
                </div>
            </div>
        </div>
        <div className="footer pb-1 " style={{backgroundColor:'White',marginLeft:'90px',paddingTop:'5px'}}>
            <h4 className="text-center" >Made by Sanjana &copy; 2024</h4>
        </div>
    </div>
)

}

export default Layout;