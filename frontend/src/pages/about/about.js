import React from 'react';
import "./about.css";
import Typewriter from 'typewriter-effect';
import Resume from '../../attachments/Sanjana_Resume.pdf';

function About()
{
    const handleOpen = () => {
        window.open(Resume, '_blank');
      };
return(
    <div className='about-page'>
        <div className='about-content'>
        <h3>Hi, I am</h3>
        <h1 className='type-writer'>
            <Typewriter
            options={{
                strings: ['Sanjana Mudimala', 'Sanjana Reddy Mudimala'],
                autoStart: true,
                loop: true,
            }}
            />
        </h1>
        
        </div>
        <div className='resume-button'>
            <button className="btn" onClick={handleOpen}>My Resume</button>
        </div>
        <div className='info'>
            <img src="https://purepng.com/public/uploads/thumbnail//astronaut-hold-flag-in-hand-cmr.png"/>
         <h5>
         Passionate Computer Science student at CBIT with a strong foundation in web development and problem-solving. 
         Proficient in key technologies including Python, JavaScript, HTML, CSS, and SQL, with hands-on experience in frameworks like React and Node.js. 
         Adept at tackling complex challenges through innovative solutions, demonstrated by projects such as developing a medicine recommendation system using machine learning. 
         Experienced in collaborating on dynamic team projects, including a notable hackathon with JPMorgan Chase, 
         addressing real-world challenges posed by the NGO Room To Read. Eager to leverage my technical skills and 
         problem-solving abilities to contribute to impactful projects that drive technological advancements and make a difference in people’s lives.
        </h5>
        </div>
    </div>
)

}

export default About;