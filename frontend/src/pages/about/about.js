import React from 'react';
import "./about.css";
import Typewriter from 'typewriter-effect';

function About()
{
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
    </div>
)

}

export default About;