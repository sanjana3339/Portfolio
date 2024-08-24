import React from 'react';
import './education.css';
import { educationList } from '../../utils/educationList';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md';


function Education() {
  return (
    <div className='education-component' id="education">
      <h1>Education</h1>
      <VerticalTimeline>
      {educationList.map((education) => (
        <VerticalTimelineElement
          key={education._id}
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#f5f5f5', color: '#000000' }}
          contentArrowStyle={{ borderRight: '9px solid  rgb(255,255,255)' }}
          date={<span style={{ fontSize: '25px' }}>{education.yr}</span>}
          iconStyle={{ background: '#f5f5f5', color: '#000000' }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">{education.name}</h3>
          <h4 className="vertical-timeline-element-subtitle">{education.score}</h4>
          <p>
            {/* Additional details can be added here if needed */}
          </p>
        </VerticalTimelineElement>
      ))}
      </VerticalTimeline>
    </div>
  );
}

export default Education;
