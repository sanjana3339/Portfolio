import React from 'react';
import './achievements.css';
import { achievementsList } from '../../utils/achievementsList';

function Achievements() {
  return (
    <div className='achievement-component'>
      <h1>Achievements</h1>
      <div className='row'>
        {achievementsList.map((achievement) => (
          <div className='col-md-4' key={achievement._id}>
            <div className="card rounded">
              <div className='card-title'>{achievement.name}</div>
              <div className='card-body'>
              <span className='card-content'>{achievement.content}</span>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
