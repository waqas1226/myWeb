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
    <div className="myInfo">Mobile no.:<span className="o">+92 340-5661226</span></div>
    <div className="myInfo">City:<span className="o">Lahore</span></div>
    <div className="myInfo">Address:<span className="o">House # 502K Al Rahman Garden phase 2 Lahore</span></div>
    
    <a href="https://firebasestorage.googleapis.com/v0/b/inotebook-94faa.appspot.com/o/My%20Resume.pdf?alt=media&token=6052bbb0-33af-4ce5-b4c2-3286c932369f" download="dff" className='download'>Download CV</a>
  </div>
  <p>

  I am graduated from UET Taxila in BSc Electronics Engineering. 
  I started my career as Electronics Engineer in 2016 in Rupali polyester ltd(A petrochemical plant) and 
  promoted as AM Electronics in 2021. 
  My major responsibilities are to supervise Maintenance and trooubleshooting activities at plant, more then this 
  i am responsible to manage staff for routine work and manage the procurment of new parts and produce related documentation.
  </p>
<br/>
<p>
To gain some extra skills I learned React Js, Html, CSS, JavaScript, Bootstrap, Material UI, MERN stack & Firebase with the help 
of famous Youtube Channels like  "Code with Harry", "Codevolution","Lama dev" and 
websites like "Stack Overflow", "W3 Schools", "React documentation", "dmitripavlutin.com" etc. I started learning Html,CSS, Javascript and 
after having some reasonable knowledge, began to learn most famous JavaScript UI library 'React Js'. I also have some basic level skills in MERN stack and firebase.    
</p>
</div>

</div>

    );
}

export default About;