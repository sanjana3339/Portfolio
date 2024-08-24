import React from 'react';
import './internship.css';

function Internship() {
  return (
    <div className='internship-component' id="internship">
      <h1>Internship</h1>
      <div className='row'>
          <div className='col-md-8'>
            <div className="card rounded">
            <div className='card-image'>
                <img src=" https://healthcarenow.in/assets/img/logo.png" />
              </div>
           
              <div className='card-title'>HealthCareNow Pvt Ltd  (Software Development Intern)  </div>
              <div className='card-body'>
              <div className='card-yr'>June,2024 - July,2024</div>
              <div className='card-desc'>Interned at HealthCareNow, gaining hands-on experience with Angular, TypeScript, MySQL, Spring Boot
& Java. Developed and maintained web pages using these technologies. Collaborated with the team to
enhance user experience and functionality of the web application, and fixed bugs.</div>

                
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Internship;
