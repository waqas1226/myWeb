import React from 'react';
import './Projects.css';
import Accordion from 'react-bootstrap/Accordion';


function Projects(props) {


    const mystyle = {
        color: "wheat",
        backgroundColor: "black",
    };

    const Projects = [
        {
            title: 'Hotel Booking App design',
            desc: 'Hotal Booking app is designed in React Js. In this project a beutiful UI is designed which contains multiple travel options including a search feature with daterange. This is just a UI interface and i have intention to improve this practice project by creating backend with use of Mongo Db, Node Js, Express js & Firebase.  ',
            libraries: 'React Js, Material UI, React router dom, react-daterange, CSS',
            sources: 'Lama dev Youtube channel',
            coding: '80% self coded, 20% copied ',
            code:'https://github.com/waqas1226/Booking-App',
            vid:'https://firebasestorage.googleapis.com/v0/b/inotebook-94faa.appspot.com/o/Booking.mp4?alt=media&token=ee74f29d-4286-4c4f-9a41-b164e332da74'
        },
        {
            title: 'Admin dashboard design',
            desc: 'Admin dashboard is designed in React Js, as a practice project to improve design skills by taking help from Lama dev youtube channel. This UI contains options of presenting the current data of an organization etc by graphical representation and widgets concept. It also have options to view details of User or product and adding the new users or products.',
            libraries: 'React Js, Material UI, React router dom, Recharts, CSS',
            sources: 'Lama dev Youtube channel',
            coding: '60% copied, 40% self coded',
            code:'https://github.com/waqas1226/Admin-Dashboard',
            vid:'https://firebasestorage.googleapis.com/v0/b/inotebook-94faa.appspot.com/o/Admin.mp4?alt=media&token=b173d0ca-2c94-4281-b0c7-3c157013d743'
        },
        {
            title: 'Memorizing Game',
            desc: 'A simple Memorizing game designed with React Js using Hooks. It works as matching game and option can be seen by clicking an item. If second clicked item matches with first then both cleared otherwise both hidden with delay of 1 second and if all cleared within a set time then a message of "You win" displayed. ',
            libraries: 'React Js',
            coding: '100% self coded',
            code:'https://github.com/waqas1226/Memorizing-game',
            accuracy: 'Almost 90%',
            vid:'https://firebasestorage.googleapis.com/v0/b/inotebook-94faa.appspot.com/o/Memorize.mp4?alt=media&token=dcd529aa-2fd7-4fed-af3f-c396895b3a3d'
        },
        {
            title: 'Tetris Game',
            desc: 'This game was a nice project during learning of Javascript. Though not works 100% efficiently as created professionally, it was a good practice of javascript. Big challenge in this project was to avoid wrong left right move and wrong rotate. There are still some bugs to be cleared but it works.... ',
            libraries: 'HTML, CSS, JavaScript',
            coding: '100% self coded',
            code:'https://github.com/waqas1226/Tetris-Game',
            accuracy: 'Almost 85%',
            vid:'https://firebasestorage.googleapis.com/v0/b/inotebook-94faa.appspot.com/o/Tetris.mp4?alt=media&token=49005005-4d0a-4575-b2c6-cbc205557634'
        },
        {
            title: 'Calculator',
            desc: 'Calculator is designed with HTML, CSS, JavaScript and working almost 100% accuratelly',
            libraries: 'HTML, CSS, JavaScript',
            coding: '100% self coded',
            accuracy: 'Almost 95%',
            code:'https://github.com/waqas1226/Calculator',
            vid:'https://firebasestorage.googleapis.com/v0/b/inotebook-94faa.appspot.com/o/Calculator.mp4?alt=media&token=28d51d38-1cca-48d5-9b4e-7ca8a56a4a83'
        }
    ]
    return (
        <div id='projects' className='ProjContainer'>
            <div className="projTitle">

                <h1>My <span className="o">Projects</span></h1>
            </div>
            <div className="projects">
                {
                    Projects.map((item, i) =>
                        <Accordion key={i} className='a'>
                            <Accordion.Item style={{ width: '100%' }} eventKey="0">
                                <Accordion.Header style={mystyle}>{item.title}</Accordion.Header>
                                <Accordion.Body style={mystyle}>
                                    <div className="desc">Description: <span className="o">{item.desc}</span></div>
                                    <div className="desc">Libraries/Languages: <span className="o">{item.libraries}</span></div>
                                    <div className="desc">Sources: <span className="o">{item.sources}</span></div>
                                    <div className="desc">Coding: <span className="o">{item.coding}</span> </div>
                                    <div className="desc">Code link: <a className="o" href={item.code}>{item.code}</a> </div>
                                    <div className="desc">Accuracy: <span className="o">{item.accuracy}</span> </div>
                                    {/* <img src={item.img} alt="pic" className="projPic" /> */}
                                    <h1>Project Video</h1>
                                    <video type="video/mp4" src={item.vid} width="320" height="240" controls ></video>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                }
            </div>

        </div>

    );
}

export default Projects;