import React, { useEffect, useState } from 'react';
import Form from './Form';
import './UserInfo.css';
import pic from './profilepic.png';
import footer from './footer.svg';
import { NavSideBarLayout } from '../routes';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Box, Button, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';




const UserInfo = () => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const [user, setUser] = useState(null);

  const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';

  const handleClick=()=> navigate('/staff');
    
   
 

  useEffect(() => {
    axios
      .get(url + '/api/v2/user/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      <NavSideBarLayout childCSS={{ marginTop: '4rem' }}>
        <div className="card-container">
          <div className="button-container">
            <button className="button1">Reset Password</button>
            <button className="button2">Logout</button>
          </div>
          <div className="card">
            <img src={pic} className="profilepic" alt="" />
            <p style={{ margin: '30px' }} className="username">
              {user?.name}
            </p>
            <div className="user-info">
              <div className="user-info-row" style={{ display: 'flex' }}>
                <div
                  className="user-info-left"
                  style={{ width: '50%', textAlign: 'left' }}
                >
                  <p
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: '10px',
                    }}
                  >
                    <span
                      className="leftdata"
                      style={{ width: '40%', fontWeight: '700' }}
                    >
                      UID
                    </span>

                    <span className="colon" style={{ width: '10%' }}>
                      :
                    </span>
                    <span style={{ width: '50%' }}>{user?.regNo}</span>
                  </p>
                  <p
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: '10px',
                    }}
                  >
                    <span className="leftdata" style={{ width: '40%' }}>
                      Nationality
                    </span>

                    <span className="colon" style={{ width: '10%' }}>
                      :
                    </span>
                    <span style={{ width: '50%' }}>
                      {user?.nationality && user?.nationality}
                    </span>
                  </p>
                  <p
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: '10px',
                    }}
                  >
                    <span className="leftdata" style={{ width: '40%' }}>
                      Gender
                    </span>

                    <span className="colon" style={{ width: '10%' }}>
                      :
                    </span>
                    <span style={{ width: '50%' }}>
                      {' '}
                      {user?.gender && user?.gender}
                    </span>
                  </p>
                  <p
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: '10px',
                    }}
                  >
                    <span className="leftdata" style={{ width: '40%' }}>
                      D.O.B
                    </span>

                    <span className="colon" style={{ width: '10%' }}>
                      :
                    </span>
                    <span style={{ width: '50%' }}>
                      {' '}
                      {user?.dob && user?.dob}
                    </span>
                  </p>
                  <p
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: '10px',
                    }}
                  >
                    <span className="leftdata" style={{ width: '40%' }}>
                      Phone Number
                    </span>

                    <span className="colon" style={{ width: '10%' }}>
                      :
                    </span>
                    <span style={{ width: '50%' }}>
                      {' '}
                      {user?.phone && user?.phone}
                    </span>
                  </p>
                  <p
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: '10px',
                    }}
                  >
                    <span className="leftdata" style={{ width: '40%' }}>
                      Email-Id
                    </span>

                    <span className="colon" style={{ width: '10%' }}>
                      :
                    </span>
                    <span style={{ width: '50%' }}>{user?.email}</span>
                  </p>
                </div>
              </div>
            </div>
            <div style={{ margin: '50px' }}>
              {/* <Form user={user} setUser={setUser} /> */}
              <Button onClick={handleOpen}
                variant="outlined"
               
              >Edit Profile</Button>
               <Button onClick={handleClick}
                variant="outlined"
               
              >More Details</Button>
            </div>
            <img src={footer} className="footer" />
          </div>
        </div>
      </NavSideBarLayout>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="modal-modal-title" style={{
            textAlign: 'center',
            marginBottom: '20px',
          }}>Edit Profile</h2>
          <Form user={user} setUser={setUser} />
        </Box>
      </Modal>
    </div>
  );
};

export default UserInfo;
