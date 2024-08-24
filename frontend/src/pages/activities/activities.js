import React from 'react';
import './activities.css';
import { activitiesList } from '../../utils/activitiesList';

function Activities() {
  return (
    <div className='activities-component' id="activities">
      <h1>Extra-Curricular Activities</h1>
      <div className='row'>
        {activitiesList.map((activity) => (
          <div className='col-md-4' key={activity._id}>
            <div className="card rounded">
              <div className='card-title'>{activity.name}</div>
              <div className='card-body'>
              <span className='card-content'>{activity.content}</span>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
