import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Select, TextField } from '@mui/material';
import { width } from '@mui/system';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Form1({ student }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);


   const params = useParams();

   const [user, setUser] = useState({});

   const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';
   const local = 'http://localhost:5000';

   React.useEffect(() => {
     async function fetchUser() {
       try {
         const { data } = await axios.get(
           url + '/api/v2/user/student/' + params.id,
           {
             headers: {
               'Content-Type': 'application/json',
               Authorization: 'Bearer ' + localStorage.getItem('token'),
             },
           }
         );

         setUser(data && data.student);
       } catch (error) {
         alert(error && error.response.data.error);
       }
     }
     fetchUser();
   }, [params.id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    registrationNo: '',
    passport: '',
    phoneNo: '',
    whatsappNo: '',
    budget: '',
    studyAbroadOptions: '',
    currentSemester: '',
    graduationYear: '',
    cgpa: '',
    lpuProgramme: '',
    country: '',
    university: '',
    universityProgramme: '',
  });

  React.useEffect(()=>{
    setFormData({
      name: user?.name,
      email: user?.email,
      registrationNo: user?.regNo,
      passport: user?.studentDetails?.passport?.hasPassport,
      phoneNo: user?.phone,
      whatsappNo: user?.studentDetails?.whatsapp,
      budget: user?.studentDetails?.finincialBudget,
      studyAbroadOptions: '',
      currentSemester: user?.studentDetails?.currentSemester,
      graduationYear: '',
      cgpa: user?.studentDetails?.currentCGPA,
      lpuProgramme: user?.studentDetails?.currentCourse,
      universityProgramme: 'null',
    });
  },[user])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

 

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '50vw', marginTop: -2 }}>
      <AppBar position="static" style={{ backgroundColor: '#ffffff' }}>
        <Tabs
          TabIndicatorProps={{ style: { background: '#F07F1A' } }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          
        >
          <Tab
            label="Personal Information"
            {...a11yProps(0)}
            style={{
              minWidth: '50%',
              backgroundColor: '#ffffff',
              color: '#000000',
              fontWeight: '600',
            }}
          />
          <Tab
            label="Academic Information"
            {...a11yProps(1)}
            style={{
              minWidth: '50%',
              backgroundColor: '#ffffff',
              color: '#000000',
              fontWeight: '600',
              overflow:"hidden !important"
            }}
            
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{
          overflow:'auto'
        }}
      >
        <TabPanel value={value} index={0} dir={theme.direction}
        >
          <div>

          <form
            className="perform"
            onSubmit={handleSubmit}
            style={{ marginLeft: '1vw', marginTop: '2vh',
            height:'100%',
            overflow:"hidden !important"
          }}
            
          >
            <div style={{ display: 'flex',
            width:"100%",
            flexWrap:'wrap'
            
          }}>
            <TextField style={{
              minWidth:"100px",
              margin:'10px'
            }} id="outlined-basic" label="Name" variant="outlined"
            value={formData.name}
            onChange={handleInputChange}
            
            />

             
              <TextField style={{
                minWidth:"100px",
                margin:'10px'
              }} id="outlined-basic" label="Email" variant="outlined" />

            <TextField style={{
              minWidth:"100px",
              margin:'10px'
            }} id="outlined-basic" label="Reg No" variant="outlined" />
            <TextField style={{
              minWidth:"100px",
              margin:'10px'
            }} id="outlined-basic" label="Phone" variant="outlined" />

              <TextField style={{
                minWidth:"100px",
                margin:'10px'
              }} id="outlined-basic" label="Whatsapp" variant="outlined" />
            </div>
     
            <br />
            <Button variant="contained">Save</Button>
           
          </form>
          </div>

        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}
    
        >
          <div
          style={{
            height:"250px"
          }}
          >
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: 'flex',
                flexdirection: 'row',
                justifycontent: 'spacebetween',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  marginRight: '7rem',
                }}
              >
                <label>
                  Financial Budget:
                  <Select
                    style={{width:'300px', height:'40px'}}
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select your budget range</option>
                    <option value="Less than $10,000">Less than $10,000</option>
                    <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                    <option value="$20,000 - $30,000">$20,000 - $30,000</option>
                    <option value="More than $30,000">More than $30,000</option>
                  </Select>
                </label>

                <label>
                  Study Abroad Options:
                  <Select
                   style={{width:'300px', height:'40px'}}

                    name="studyAbroadOptions"
                    value={formData.studyAbroadOptions}
                    onChange={handleInputChange}
                  >
                    <option value="">Select your study abroad options</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="Diploma/Certificate">
                      Diploma/Certificate
                    </option>
                  </Select>
                </label>

                <label>
                  Current Semester/Year:
                  <Select
                   style={{width:'300px', height:'40px'}}
                    name="currentSemester"
                    value={formData.currentSemester}
                    onChange={handleInputChange}
                  >
                    <option value="">Select your current semester/year</option>
                    <option value="1st Semester">1st Semester</option>
                    <option value="2nd Semester">2nd Semester</option>
                    <option value="3rd Semester">3rd Semester</option>
                    <option value="4th Semester">4th Semester</option>
                    <option value="5th Semester">5th Semester</option>
                    <option value="6th Semester">6th Semester</option>
                    <option value="7th Semester">7th Semester</option>
                    <option value="8th Semester">8th Semester</option>
                  </Select>
                </label>

                <label>
                  Year of Graduation:
                  <Select
                   style={{width:'300px', height:'40px'}}
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleInputChange}
                  >
                    <option value="">Select your graduation year</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                  </Select>
                </label>

                <TextField style={{
              minWidth:"100px",
              margin:'10px',
              width:'300px', height:'40px'
            }}
            
            id="outlined-basic" label="Univeristy Program" variant="outlined" />
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                }}
              >
                 <TextField style={{
                  width:'300px'

          
            }} id="outlined-basic" label="CGPA" variant="outlined" />
                <label>
                  LPU Programme:
                  <Select
                  style={{width:'300px', height:'40px'}}
                    name="lpuProgramme"
                    value={formData.lpuProgramme}
                    onChange={handleInputChange}
                  >
                    <option value="">Select your LPU Programme</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="BBA">BBA</option>
                    <option value="MBA">MBA</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                  </Select>
                </label>

                <label>
                  Country:
                  <Select
                  style={{width:'300px', height:'40px'}}
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option value="">Select your country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="New Zealand">New Zealand</option>
                  </Select>
                </label>

                <TextField style={{
              minWidth:"100px",
              margin:'10px',
              width:'300px', height:'40px'
            }} id="outlined-basic" label="University" variant="outlined" />
              </div>
            </div>
            <button
              style={{
                marginTop: '3vh',
                width: '4rem',
                height: '2rem',
                backgroundColor: '#f07F1A',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
          </div>

        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
