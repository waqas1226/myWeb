import React from 'react';
import './Intro.css';

function Intro(props) {
    return (
        <div className="introContainer">

        <div className='intro'>
            <span className="greet">Hi</span>
            <h1>I'M <span className="o">Waqas</span></h1>
            <p className="desc">I am a Beginner Frontend Developer, having skills in React Js, Html, CSS, JavaScript, Bootstrap, Material UI, MongoDb, Node Js, Express Js, Firebase. For the practice of mentioned Languages/Libraries, I have created some projects which are described in <a href="#projects">My Projects</a> section.   
             </p>
             
            <a href="#about" className="aboutme">About me</a>
        </div>
        </div>
    );
}

export default Intro;