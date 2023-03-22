import React from 'react';
import './Sidebar.css';
import mypic from '../../My_Pic.jpg';

function Sidebar({open}) {
    return (
        // <div  className='SbContainer' >
<div className={open?'sbWrapper1':"sbWrapper"}>
            <img src={mypic} alt="pic" className="profilepic" />

            <h2 className="name">Muhammad Waqas</h2>
            <h5 className="title">Jr. Frontend developer</h5>
            
            <a href="#home" className="Link">  Home </a>
            <a href="#about" className="Link">About</a>
            <a href="#edu" className="Link"> Education </a>
            <a href="#projects" className="Link">Projects</a>
        </div>
        // </div>
    );
}

export default Sidebar;