import React, { useEffect, useState } from 'react';
import './Form.css';
import axios from 'axios';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

function Form({ user, setUser }) {
  // const [user, setUser] = useState({});

  const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';
  // const url = 'http://localhost:5000';

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState(user?.name);
  const [uid, setUid] = useState(user?.regNo);
  const [nationality, setNationality] = useState(user?.nationality);
  const [gender, setGender] = useState(user?.gender);
  const [dob, setDob] = useState(user?.dob);
  const [phone, setPhone] = useState(user?.phone);
  const [email, setEmail] = useState(user?.email);

  useEffect(() => {
    setName(user?.name);
    setUid(user?.regNo);
    setNationality(user?.nationality);
    setGender(user?.gender);
    setDob(user?.dob);
    setPhone(user?.phone);
    setEmail(user?.email);
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .put(
        url + '/api/v2/user/profile/update',
        {
          name,
          regNo: uid,
          nationality,
          gender,
          dob,
          phone,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        setShowForm(false);
        window.location.reload();
      })
      .catch((err) => {
        alert('Error', err.message);
      });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="" style={{ display: 'flex' }}>
          <div>
            <TextField
              sx={{
                mt: 2,
              }}
              fullWidth
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <TextField
              sx={{
                mt: 2,
              }}
              fullWidth
              id="outlined-basic"
              label="UID / Reg"
              variant="outlined"
              value={uid}
              onChange={(event) => setUid(event.target.value)}
            />

            <TextField
              sx={{
                mt: 2,
              }}
              fullWidth
              id="outlined-basic"
              label="Nationality"
              variant="outlined"
              value={nationality}
              onChange={(event) => setNationality(event.target.value)}
            />

            <FormControl
              fullWidth
              sx={{
                mt: 2,
              }}
            >
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
                label="Gender"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>

            <TextField
              sx={{
                mt: 2,
              }}
              type="date"
              fullWidth
              id="outlined-basic"
              label="DOB"
              variant="outlined"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
            />

            <TextField
              sx={{
                mt: 2,
              }}
              fullWidth
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              type="number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />

            <TextField
              sx={{
                mt: 2,
              }}
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>

        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
