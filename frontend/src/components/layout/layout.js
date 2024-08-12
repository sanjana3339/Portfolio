import React, {useState} from 'react';
import About from '../../pages/about/about';
import Menu from '../menus/menus';
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import './layout.css'

function Layout()
{
    const[toggle,setToggle]=useState(true)
    const handleToggle=()=>{
        setToggle(!toggle)
    }
return(
    <div>
        <div className='sidebar-section'>
            <div className={toggle?'sidebar-toggle':'sidebar'}>
            
                <div className='sidebar-toggle-icons'>
                    <p onClick={handleToggle}>
                        {toggle?
                        (<AiOutlineDoubleLeft size={30}/>):
                        (<AiOutlineDoubleRight size={30}/>)}
                    
                    </p>
                </div>
                <Menu toggle={toggle}/>
            </div>
            <div className='container'>
                <About/>

            </div>
        </div>
    </div>
)

}

export default Layout;