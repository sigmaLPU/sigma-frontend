import React from 'react';
import Form from './Form';
import './UserInfo.css';
import pic from "./profilepic.png";
import footer from "./footer.svg";
import { NavSideBarLayout } from '../routes';









const UserInfo = ({uid,nationality}) => {
  
  

  return (
    

    <div >

<NavSideBarLayout  childCSS={{marginTop:"4rem"}}>
    
    <div className="card-container">
      <div class="button-container">
  <button class="button1">Reset Password</button>
  <button class="button2">Logout</button>
</div>
      <div className="card">
      <img src={pic} className="profilepic"/>
      <p style={{margin:'30px'}} className='username'>AAKASH KUMAR</p>
        <div className="user-info" >
          <div className="user-info-row" style={{display:'flex'}}>
          <div className="user-info-left" style={{width: '50%', textAlign: 'left'}}>
          <p style={{display: 'flex', alignItems: 'center', margin:'10px'}}>
                <span className='leftdata' style={{width: '40%', fontWeight: "700"}}>UID</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span style={{width: '50%'}}> {''}</span>
              </p>
              <p style={{display: 'flex', alignItems: 'center', margin:'10px'}}>
                <span className='leftdata' style={{width: '40%'}}>Nationality</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span style={{width: '50%'}}> {nationality}</span>
              </p>
              <p style={{display: 'flex', alignItems: 'center', margin:'10px'}}>
                <span className='leftdata' style={{width: '40%'}}>Gender</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span style={{width: '50%'}}> Male</span>
              </p>
              <p style={{display: 'flex', alignItems: 'center', margin:'10px'}}>
                <span className='leftdata' style={{width: '40%'}}>D.O.B</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span style={{width: '50%'}}> 21-12-2002</span>
              </p>
              <p style={{display: 'flex', alignItems: 'center', margin:'10px'}}>
                <span className='leftdata' style={{width: '40%'}}>Phone Number</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span style={{width: '50%'}}> 9931963208</span>
              </p>
              <p style={{display: 'flex', alignItems: 'center', margin:'10px'}}>
                <span className='leftdata' style={{width: '40%'}}>Email-Id</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span style={{width: '50%'}}>Aakashaman9931@gmail.com</span>
              </p>
            </div>

            <div className="user-info-right">
            <p style={{display: 'flex', alignItems: 'center' , margin:'10px'}}>
                <span className='leftdata' style={{width: '70%'}}>LPU Joining date</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span style={{width: '50%'}}>21-12-2002</span>
              </p>
              <p style={{display: 'flex', alignItems: 'center' , margin:'10px'}}>
                <span className='leftdata' style={{width: '70%'}}>Team Joining Date</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span style={{width: '50%'}}>21-12-2002</span>
              </p>
              <p style={{display: 'flex', alignItems: 'center', margin:'10px'}}>
                <span className='leftdata' style={{width: '70%'}}>Phone Assigned date</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span style={{width: '50%'}}> 21-12-2002</span>
              </p>
              <p style={{display: 'flex', alignItems: 'center', margin:'10px'}}>
                <span className='leftdata' style={{width: '70%'}}>Phone Model</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span style={{width: '50%'}}>POCO X2</span>
              </p>
              <p style={{display: 'flex', alignItems: 'center', margin:'10px'}}>
                <span className='leftdata' style={{width: '70%'}}>Off. Phone number</span>
                
                 <span className="colon" style={{width: '10%'}}>:</span>
                <span style={{width: '50%'}}>9931963208</span>
              </p>
              <p style={{display: 'flex', alignItems: 'center', margin:'10px'}}>
                <span className='leftdata' style={{width: '54%'}}>Official Email id</span>
                
                 <span className="colon" style={{width: '7%'}}>:</span>
                <span style={{width: '0%'}}> Aakashaman9931@gmail.com</span>
              </p>
              
              
            </div>
          </div>
        </div>
        <div style={{margin:'50px'}}>
        <Form />
        </div >
        <img src={footer} className = "footer"/>
      </div>
      
    </div>

    </NavSideBarLayout>

    </div>
  );
};

export default UserInfo;
