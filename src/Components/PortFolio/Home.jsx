import React from 'react';
import About from './About';
import Education from './Education';
import Intro from './Intro';
import Projects from './Projects';

function Home(props) {
    return (
        <div id='home'>
            <Intro/>
            <About/>
            <Education/>
            <Projects/>
        </div>
    );
}

export default Home;