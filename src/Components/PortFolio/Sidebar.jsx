import React from 'react';
import './Sidebar.css';

function Sidebar(props) {
    const [imgUrl, setImgUrl]=React.useState('');
    React.useEffect(()=>{
        setImgUrl('https://firebasestorage.googleapis.com/v0/b/inotebook-94faa.appspot.com/o/My_Pic.jpg?alt=media&token=2921fe2f-9898-430c-946e-c678c5a87c2c');
    },[])
    return (
        <div  className='SbContainer'>
<div className="wrapper">
            <img src={imgUrl} alt="pic" className="profilepic" />

            <h2 className="name">Muhammad Waqas</h2>
            <h5 className="title">Jr. Frontend developer</h5>
            
            <a href="#home" className="Link">Home</a>
            <a href="#about" className="Link">About</a>
            <a href="#edu" className="Link">Education</a>
            <a href="#projects" className="Link">Projects</a>
        </div>
        </div>
    );
}

export default Sidebar;