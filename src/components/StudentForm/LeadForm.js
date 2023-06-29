import React, { useState } from 'react';
import banner from './banner2.gif';
import world from '../home_page/resource/world.jpg';
import country from './CountryCodes.json';
import programme from './programmelist.json';
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
} from '@material-ui/core';
import { DialogActions, DialogContent, DialogContentText } from '@mui/material';
import axios from 'axios';

export default function LeadForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    regNo: '',
    gender: '',
    nationality: '',
    phone: '',
    whatsapp: '',
    optedFor: '',
    currentCourse: '',
    currentSemester: '',
    currentCGPA: '',
  });

  const [semesters, setSemesters] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:5000";
    // const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';

    const data = await axios
      .post(url + '/api/v2/interestedStudent/add', formData)
      .then((res) => {
        alert('Your response has been recorded');
      })
      .catch((err) => {
        alert(err?.response?.data?.message || 'Something went wrong');
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundImage: `url(${world})`,
          backgroundSize: 'cover',
          filter: 'blur(3px)',
        }}
      ></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <style>
            {`
            @media (max-width: 600px) {
              img {
                width: 100% !important;
                height: auto;
              }

              .field {
                width: 86% !important;
              }
            }
          `}
          </style>
          <img
            src={banner}
            style={{
              position: 'sticky',
              height: 'auto',
              width: '45vw',
              maxWidth: '100%',
              maxHeight: '30vh',
              borderRadius: '10px',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
            }}
            alt="Banner"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          <form style={{ width: '100%' }} onSubmit={handleFormSubmit}>
            <TextField
              className="field"
              label="Name"
              variant="outlined"
              margin="normal"
              style={{ width: '45%' }}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              className="field"
              label="Registration Number"
              variant="outlined"
              margin="normal"
              style={{ width: '45%' }}
              name="regNo"
              value={formData.regNo}
              onChange={handleChange}
            />
            <TextField
              className="field"
              label="Email ID"
              variant="outlined"
              margin="normal"
              style={{ width: '45%' }}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <FormControl
              className="field"
              variant="outlined"
              margin="normal"
              style={{ width: '45%' }}
            >
              <InputLabel>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              className="field"
              variant="outlined"
              margin="normal"
              style={{ width: '45%' }}
            >
              <InputLabel>Nationality</InputLabel>
              <Select
                label="Nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              >
                {country.map((country) => (
                  <MenuItem key={country.code} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              type="number"
              className="field"
              label="Phone Number"
              variant="outlined"
              margin="normal"
              style={{ width: '45%' }}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              type="number"
              className="field"
              label="WhatsApp Number"
              variant="outlined"
              margin="normal"
              style={{ width: '45%' }}
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
            />
            <FormControl
              className="field"
              variant="outlined"
              margin="normal"
              style={{ width: '45%' }}
            >
              <InputLabel>Study Abroad Option</InputLabel>
              <Select
                label="Study Abroad Option"
                name="optedFor"
                value={formData.optedFor}
                onChange={handleChange}
              >
                <MenuItem value="semester-exchange">semester Exchange</MenuItem>
                <MenuItem value="credit-transfer">credit Transfer</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              className="field"
              variant="outlined"
              margin="normal"
              style={{ width: '45%' }}
            >
              <InputLabel>Current Course</InputLabel>
              <Select
                label="Current Course"
                name="currentCourse"
                value={formData.currentCourse}
                onChange={handleChange}
              >
                {programme.map((programme) => (
                  <MenuItem key={programme.code} value={programme.Name}>
                    {programme.Name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              className="field"
              variant="outlined"
              margin="normal"
              style={{ width: '45%' }}
            >
              <InputLabel>Current Semester</InputLabel>
              <Select
                label="Current Semester"
                name="currentSemester"
                value={formData.currentSemester}
                onChange={handleChange}
                type='number'
              >
                {semesters.map((semester) => (
                  <MenuItem key={semester} value={Number(semester)}>
                    {semester}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              className="field"
              variant="contained"
              size="large"
              style={{
                width: '45%',
                marginTop: '20px',
                backgroundColor: 'orange',
                borderRadius: '10px',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
              }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>
        <Dialog open={showPopup} onClose={handleClosePopup}>
          <DialogTitle>Thank you</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Your form has been submitted successfully!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosePopup} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
