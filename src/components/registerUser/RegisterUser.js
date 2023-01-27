import React from 'react';
import { NavSideBarLayout } from '../routes';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

const RegisterUser = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('123456');
  const [regNo, setRegNo] = React.useState('');

  const submitHandler = async(e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('regNo', regNo);
    formData.append('password', password);

    await axios.post(
      'https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/user/register',
      {
        name,
        email,
        regNo,
        password
      }

    
    
    );

  
  };

  return (
    <div>
      <NavSideBarLayout childCSS={{ marginTop: '1.5rem' }}></NavSideBarLayout>
      <h3 style={{ textAlign: 'center' }}>Register User - Admin</h3>
      <div
        style={{
          marginTop: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form
        onSubmit={submitHandler}
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '1rem',
            width: '607px',
          }}
        >
          <TextField
            id="outlined-basic"
            label="Enter Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
          type='number'
            id="outlined-basic"
            label="UID / Reg No"
            variant="outlined"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />{' '}
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button  type="submit" variant="contained" color="primary">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
