import React from 'react';
import './projects.css'
import { projectsList } from '../../utils/projectsList';

function Projects()
{
return(
    <div className='projects-component'>
        <h1>Projects</h1>
        <div className='row'>
        {projectsList.map((project)=>(
            <div className='col-md-3'>
                <div className="card m-2">
                    <div className='card-content'>
                        <div className='card-body'>
                            <div className='media d-flex justify-content-center'>
                                <skill.icon className='skill-icon' size={35}/>
                                <h5>{skill.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        ))}
        </div>
    </div>
)

}

export default Projects;