import React from 'react';
import './Sideprofile.css';
import picture from './ppic.jpg';
import call from './call.png';
import whatsapp from './whatsapp.png';
import email from './email.png';

const Sideprofile = ({ image, title, text }) => {
  return (
    <div className='main-main'>
        <img className='call' src={call} ></img>
        <img className='email' src={email}>
        </img>
        <img className='whatsapp' src={whatsapp}></img>
    <div className='main'>
       
    <div className="custom-card">
        
  
        <div className='content'>
      <img src= {picture} alt={title} className="custom-card-image" />
      <div className="custom-card-content">
      
        <h3 className="custom-card-title">AAKASH KUMAR</h3>
        <p className="custom-card-text">Trainee intern</p>
       
        
        
          
            
        </div>
      </div>

    </div>
    </div>
    </div>
  );
};

export default Sideprofile;
