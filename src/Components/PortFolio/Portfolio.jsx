import React from 'react';
import Home from './Home';
import Sidebar from './Sidebar';

function Portfolio(props) {
    return (
        <div className='mainContainer'>
            <div className="mainWrapper">
                <Sidebar/>
                <Home/>
            </div>
            
        </div>
    );
}

export default Portfolio;