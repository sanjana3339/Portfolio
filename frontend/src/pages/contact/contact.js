import React from 'react';
import './contact.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

function Contact() {
  return (
    <div className='contact-component' id="contact">
      <div className='container'>
        <div className='row'>
          {/* First Card */}
          <div className='col-md-6'>
            <div className='card card0 border-0'>
              <div className='border-line'>
                <img 
                  src="https://media.istockphoto.com/id/1340452442/vector/customer-support-department-staff-helping-a-client-via-hotline-call-to-solve-a-problem.jpg?s=612x612&w=0&k=20&c=b3HFZ1gkozVWKVENg4il-lqdj8hUfFQCYJemQ9UOnsg="
                  alt="Contact"
                  className='img-fluid'
                />
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className='col-md-6'>
            <div className='border-line'>
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <h1>
                    Contact Me
                    <div className='icons'>
                        <a href="https://www.linkedin.com/in/sanjana-reddy-mudimala/" target="_blank" rel="noopener noreferrer"><BsLinkedin color="blue" size={40} className="ms-4" /></a>
                        <a href="https://github.com/sanjana3339" target="_blank" rel="noopener noreferrer"><BsGithub color="black" size={40} className="ms-4" /></a>
                        <a href="https://leetcode.com/u/sanjana_mudimala/" target="_blank" rel="noopener noreferrer"><SiLeetcode color="black" size={40} className="ms-4" /></a>
                    </div>
                  </h1>

                  {/* <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div> */}
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3 form-control"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3 form-control"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3 form-control"
                    />
                  </div>
                  <div className="row px-3">
                    <button className="btn btn-primary sendmessage">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
