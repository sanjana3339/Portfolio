import React from 'react';
import './skills.css'
import { SkillsList } from '../../utils/skillsList';

function Skills()
{
return(
    <div className='skills-component'>
        <h1>Skills</h1>
        <div className='row'>
        {SkillsList.map((skill)=>(
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

export default Skills;