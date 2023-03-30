// import { Download } from '@mui/icons-material';
import React from 'react';
import './About.css';

function About(props) {
    return (
        <div id='about' className="aboutContainer">
          <div className="aboutTitle">

<h2>About <span className="o">ME</span></h2>
          </div>
<div className="bottom">
  
  <div className="myInfodiv">
    
    <div className="myInfo">Name:<span className="o">Muhammad Waqas</span></div>
    {/* <div className="myInfo">Status:<span className="o">Beginner Frontend Developer</span></div> */}
    <div className="myInfo">Email:<span className="o">engr.waqas12@gmail.com</span></div>
    <div className="myInfo">Mobile no.:<span className="o">+92 307-5541483</span></div>
    <div className="myInfo">City:<span className="o">Lahore</span></div>
    <div className="myInfo">Address:<span className="o">House # 502K Al Rahman Garden phase 2 Lahore</span></div>
    <div className="myInfo">Github:<a className="o" href='https://github.com/waqas1226'>https://github.com/waqas1226</a></div>
    
    <a href="https://firebasestorage.googleapis.com/v0/b/inotebook-94faa.appspot.com/o/React%20Developer.pdf?alt=media&token=a963fbca-e2e9-4cae-a556-061dfcd14f66" download="dff" className='download'>Download CV</a>
  </div>
  <p>

  I am graduated from UET Taxila in BSc Electronics Engineering. 
  I started my career as Electronics Engineer in 2016 in Rupali polyester ltd(A petrochemical plant) and 
  promoted as AM Electronics in 2021. 
  My major responsibilities are to supervise Maintenance and Problem solving activities at plant, more then this 
  i am responsible to manage staff for routine work and manage the procurment of new parts and produce related documentation.
  </p>
<br/>
<p>
I am a self-taught beginner ReactJS developer with a passion for web development. 
To gain extra skills and knowledge, I turned to various resources such as YouTube channels like Code with Harry, Codevolution, Lama dev, and freeCodeCamp, as well as websites like Stack Overflow, W3 Schools, MDN Web Docs, and official documentation. 
Through these resources, I learned HTML, CSS, JavaScript, Bootstrap, Material UI, and the basics of the MERN stack and Firebase.
 My journey began with HTML, CSS and JavaScript, and later I moved on to learn ReactJs, which is one of the most popular JavaScript UI library. 
 I am excited to continue learning and building my skills as a developer and am dedicated to staying up-to-date with the latest technologies and best practices in the field.  
</p>
</div>

</div>

    );
}

export default About;