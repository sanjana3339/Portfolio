import React from 'react';
import './projects.css';
import { projectsList } from '../../utils/projectsList';

function Projects() {
  return (
    <div className='projects-component' id="project">
      <h1>Projects</h1>
      <div className='row'>
        {projectsList.map((project) => (
          <div className='col-md-4' key={project._id}>
            <div className="card rounded">
              <div className="card-side front">
                <div className='card-title'>{project.name}</div>
                <div className='card-image'>
                  <img src={project.img} alt={project.name} />
                </div>
              </div>
              <div className="card-side back">
                <div className='card-body'>
                  <div className='card-desc'>{project.desc}</div>
                  <div className='card-detail-badge'>
                    {project.stack.split(',').map((tech, index) => (
                      <span key={index} className='tech-badge'>
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <div className='git-link'>
                    <a href={project.git} target="_blank" rel="noopener noreferrer">
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
