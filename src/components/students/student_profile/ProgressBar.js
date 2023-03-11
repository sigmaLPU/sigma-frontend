import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import Form6 from './Form6';
import image from './ppic.png';


const steps = [
  'Counselling',
  'Document Verification',
  'Payment & Approval',
  'Foreign University Approval',
  'Visa Approved',
  'Process Done',
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

export default function ProgressBar() {

  const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setValue((prevValue) => prevValue + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setValue((prevValue) => prevValue - 1);
  };


  return (

    <><div
      style={{
        boxSizing: "border-box",

        position: "absolute",
        width: "62vw",
        height: "20vh",
        left: "10vw",
        top: "23vh",

        background: "#FFFFFF",
        border: "1px solid #F07F1A",
        boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.25)",
        borderRadius:'8px'
      }}
    >

      

      <p className="heading1">Basic Information</p>
      <style>{`
        .heading1 {
          margin-top: -2vh;
          background-color: #F07F1A;
          width: 15vw;
          padding-bottom: 0.8vh;
          padding-top: 0.8vh;
          font-size: 1.2rem;
          text-align: center;
          margin-left: 24vw;
          border-radius:18px;
        }
      `}</style>
    
        
    <div style={{display: 'flex', flexDirection:'row', }}>
    <div style={{display:'flex', flexDirection:'row', height:'0px',marginTop:'1rem',marginLeft:'1rem'}}>
              <img className='profilepic' src={image} style={{width:'5rem',height:'5rem'}}></img>

            </div>   
  <div style={{marginLeft:'1vw'}}>
    <p className='cardtitle'>AAKASH KUMAR</p>  
    <p style={{display: 'flex', alignItems: 'center'}}>
      <span className='leftdata' style={{width: '6vw'}}>Reg. No.</span>
      <span className="colon" style={{width: '2vw'}}>:</span>
      <span className='value' style={{width: '8vw'}}>12015092</span>
    </p>
    <p style={{display: 'flex', alignItems: 'center'}}>
      <span className='leftdata' style={{width: '6vw'}}>Email</span>
      <span className="colon" style={{width: '2vw'}}>:</span>
      <span className='value' style={{width: '8vw'}}>Aakashaman9931@gmail.com</span>
    </p>
    <p style={{display: 'flex', alignItems: 'center'}}>
      <span className='leftdata' style={{width: '6vw'}}>Phone No.</span>
      <span className="colon" style={{width: '2vw'}}>:</span>
      <span className='value' style={{width: '8vw'}}> 9931963208</span>
    </p>
    <p style={{display: 'flex', alignItems: 'center'}}>
      <span className='leftdata' style={{width: '6vw'}}>Opted for</span>
      <span className="colon" style={{width: '2vw'}}>:</span>
      <span className='value' style={{width: '8vw'}}>Credit transfer</span>
    </p>
  </div>
  <hr style={{marginLeft:'9.5vw',height:'17vh'}}></hr>
  <div style={{marginLeft:'8vw',display:'flex',flexDirection:'column',alignItems:'center'}}>
  <p style={{fontSize:'1.2rem', fontWeight:'600', marginTop:'1rem'}}>Assigned Counsellor</p>
            <p >Animesh Shrivatri</p>
            <p className='uid'>UID:63682</p>
            </div>
            <div style={{display:'flex', flexDirection:'column',marginLeft:'5rem'}}>
            <Mailto email="animesh.6733@lpu.in" subject="regarding my credit transfer" body="Respected Sir...">
            <button className='profile-button'  style={{marginTop: "2vh",  width: "4rem", height: "2rem", backgroundColor: "#f07F1A", borderRadius: "8px", border: "none", cursor: "pointer" }}>Email</button>
            </Mailto>
             <a href="tel:+919915293629"><button  className='profile-button'  style={{marginTop: "2vh",  width: "4rem", height: "2rem", backgroundColor: "#f07F1A", borderRadius: "8px", border: "none", cursor: "pointer" }}>call</button></a>
            
  </div>
 
</div>

  
    
   
    </div>
    
    
    <>
    
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {activeStep !== 0 && (
          <Button sx={{ right: '68vw', top: "75vh", zIndex: "99", color: "black", backgroundColor: "#f07F1A" }} onClick={handleBack}>
            GO bACK
          </Button>
        )}
        {activeStep !== steps.length - 1 ? (
          <Button sx={{ right: '27.5vw', top: "75vh", zIndex: "99", color: "black", backgroundColor: "#f07F1A" }} onClick={handleNext} variant="contained">
            Approve
          </Button>
        ) : (
          <Button sx={{ right: '70rem', top: "40rem", zIndex: "99" }} variant="contained">Finish</Button>
        )}
      </Box>
      <style>{`
         .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
          color: #f07F1A;
         
      }
      
      `}</style>
    </Box>


        <div
          style={{
            boxSizing: "border-box",

            position: "absolute",
            minWidth: "62vw",
            width: "62vw",
            height: "52vh",
            left: "10vw",
            top: "45vh",

            background: "#FFFFFF",
            border: "1px solid #F07F1A",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '50vh' }}
          >
            <Tabs
              TabIndicatorProps={{ style: { background: '#000000', width: '0.34rem', height: '4.2rem' } }}
              orientation="vertical"
              variant="scrollable"
              value={value}
              //onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider', width: '10vw', minWidth: "10vw" }}
            >
              <Tab label="Counselling" {...a11yProps(0)} style={{ backgroundColor: '#F07F1A', boxSizing: 'border-box', borderBottom: '0.8rem solid #FFFFFF', fontWeight: '700', color: '#000000', height: '5rem' }} />
              <Tab label="Document Verification" {...a11yProps(1)} style={{ backgroundColor: '#F07F1A', boxSizing: 'border-box', borderBottom: '0.8rem solid #FFFFFF', fontWeight: '700', color: '#000000', height: '5rem' }} />
              <Tab label="Payment & Approval" {...a11yProps(2)} style={{ backgroundColor: '#F07F1A', boxSizing: 'border-box', borderBottom: '0.8rem solid #FFFFFF', fontWeight: '700', color: '#000000', height: '5rem' }} />
              <Tab label="Foreign University Approval" {...a11yProps(3)} style={{ backgroundColor: '#F07F1A', boxSizing: 'border-box', borderBottom: '0.8rem solid #FFFFFF', fontWeight: '700', color: '#000000', height: '5rem' }} />
              <Tab label="Visa Approved" {...a11yProps(4)} style={{ backgroundColor: '#F07F1A', boxSizing: 'border-box', borderBottom: '0.8rem solid #FFFFFF', fontWeight: '700', color: '#000000', height: '5rem' }} />
              <Tab label="Process Done" {...a11yProps(5)} style={{ backgroundColor: '#F07F1A', boxSizing: 'border-box', borderBottom: '0.8rem solid #FFFFFF', fontWeight: '700', color: '#000000', height: '5rem' }} />

            </Tabs>
            <TabPanel value={value} index={0}>
              <Form1 />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Form2 />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Form3 />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Form4 />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Form5 />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Form6 />
            </TabPanel>

          </Box>
        </div></></>
  );
}
