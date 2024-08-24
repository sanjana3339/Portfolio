import React from 'react';
import './certification.css';
import { certificationList } from '../../utils/certificationList';

function Certification() {
  return (
    <div className='certification-component' id="certification">
      <h1>Certifications</h1>
      <div className='row'>
        {certificationList.map((certification) => (
          <div className='col-md-4' key={certification._id}>
            <div className="card rounded">
              <div className='card-title'>{certification.name}</div>
              <div className='card-body'>
              <span className='card-company'>{certification.company}</span>
                <span className='card-year'>{certification.yr}</span>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;
