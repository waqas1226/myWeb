import React from 'react';
import { useState } from 'react';
import Home from './Home';
import Sidebar from './Sidebar';

function Portfolio(props) {
    const [sbOpen,setSbOpen]=useState(false)
    console.log(sbOpen)
    return (
        <div className='mainContainer'>
            <div className="mainWrapper">
                <div className="menu" onClick={()=>setSbOpen(!sbOpen) }>{!sbOpen?'>':'x'}</div>
                <Sidebar open={sbOpen}/>
                <Home/>
            </div>
            
        </div>
    );
}

export default Portfolio;