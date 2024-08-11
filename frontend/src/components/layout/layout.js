import React from 'react';
import Home from '../../pages/home/home';
import { AiOutlineDoubleLeft } from "react-icons/ai";
import './layout.css'

function Layout()
{
return(
    <div>
        <div className='sidebar-section'>
            <div className='sidebar'>
                <div className='sidebar-toggle-icons'>
                    <AiOutlineDoubleLeft size={30}/>
                </div>
            </div>
            <div className='container'>
                <Home/>

            </div>
        </div>
    </div>
)

}

export default Layout;