import React from 'react';
import './Education.css';

function Education(props) {
    return (
        <div id='edu' className='eduContainer'>
<div className="eduTitle">
            <h2>My <span className="o">Education</span></h2>
</div>

            <div className="eduDetail">
                <div className="bsc">

                    {/* <div className="eduSingle"> */}
                    <div className="eduTop">
                        <h2 className="degree">BSc Electronics Enginnering</h2>

                        <div className="yearGpa">
                            <div className="year">Year: <span className='o'>2015</span></div>
                            <div className="GPA">GPA: <span className='o'>3.16</span></div>
                        </div>
                        <div className="uni">University:<span className='o'>University of Engineering and Technology Taxila</span></div>
                    </div>
                    <div className="projects">
                        <label htmlFor="ul"><h3>Projects</h3></label>
                        <ol className="projectsUl" id='ul'>
                            <li className="project"><span className="o">PLC programming of Boiler monitoring system </span></li>
                            <li className="project"><span className="o">Line Tracking Robot using PIC Microcontroller and C language</span></li>
                            <li className="project"><span className="o">Look ahead carry adder design using Verilog HDL</span> </li>
                        </ol>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Education;