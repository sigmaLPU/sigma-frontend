import React from 'react';
import './UserInfo.css';
import image from './ppic.png'
import VerticalTabs from './VerticalTabs.jsx';



const UserInfo = () => {
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }
  
  
  return (
    <div className='main'>
      <div className='updatecard'>
        <p className='heading2'>Notes</p>
      </div>
      <div className='processcard'>
        <VerticalTabs/>
      </div>
    

    
    
    {/* <div className="card-container">
      <div className="card">
    <p className='heading'>Basic Information</p>
        <div className="user-info" >
          
          <div className="user-info-row" style={{display:'flex'}}>
          
          <div className="user-info-left" style={{width: '50%', textAlign: 'left'}}>
            
            <div style={{display:'flex', flexDirection:'row', height:'0px'}}>
              <img className='profilepic' src={image} style={{width:'5rem',height:'5rem'}}></img>

            </div>
            
            <div className='innerdata' >
            <p className='cardtitle'>AAKASH KUMAR</p>
          
              
              <p style={{display: 'flex', alignItems: 'center', }}>
                <span className='leftdata' style={{width: '5rem'}}>Reg. No.</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span className='value' style={{width: '50%'}}>12015092</span>
              </p>
              <p style={{display: 'flex', alignItems: 'center', }}>
                <span className='leftdata' style={{width: '5rem'}}>Email</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span className='value' style={{width: '50%'}}>Aakashaman9931@gmail.com</span>
              </p>
              <p style={{display: 'flex', alignItems: 'center', }}>
                <span className='leftdata' style={{width: '5rem'}}>Phone No.</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span className='value' style={{width: '50%'}}> 9931963208</span>
              </p>
              <p style={{display: 'flex', alignItems: 'center', }}>
                <span className='leftdata' style={{width: '5rem'}}>Opted for</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span className='value' style={{width: '50%'}}>Credit transfer</span>
              </p>
            </div>
            </div>

            <hr className='line'></hr>

            <div className="user-info-right" style={{display:'flex'}}>
              <div className='counsellor-info'>
            <p className='cardtitle'>Assigned Counsellor</p>
            <p className='name'>Animesh Shrivatri</p>
            <p className='uid'>UID:63682</p>
            </div>
            <div className='buttondiv' style={{display:'flex', flexDirection:'column'}}>
            <Mailto email="animesh.6733@lpu.in" subject="regarding my credit transfer" body="Respected Sir...">
            <button className='profile-button'>Email</button>
            </Mailto>
             <a href="tel:+919915293629"><button  className='profile-button'>call</button></a>
            
            </div>
            
             
              
              
            </div>
          </div>
        </div>
        <div style={{margin:'50px'}}>
      
        </div >
        </div>
  
      </div> */}
      </div>
 
  );
};

export default UserInfo;
