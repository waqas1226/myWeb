import React from 'react';
import './Intro.css';

function Intro(props) {
    return (
        <div className="introContainer">

        <div className='intro'>
            <span className="greet">Hi</span>
            <h1>I'M <span className="o">Waqas</span></h1>
            <p className="desc">I am a beginner developer having passion about learning and working with ReactJS. 
            I am working in web development technologies, including HTML, CSS, and JavaScript.
             Additionally, I have a basic understanding of the MERN stack (MongoDB, ExpressJS, ReactJS, and NodeJS), which is a popular technology stack for building web applications. 
             I am also familiar with Bootstrap, and Material UI, Styled Components which are popular tools and libraries for building responsive and user-friendly web interfaces and have experience working with Firebase.  
            I have created some projects which are described in <a href="#projects">My Projects</a> section.   
             </p>
             
            <a href="#about" className="aboutme">About me</a>
        </div>
        </div>
    );
}

export default Intro;