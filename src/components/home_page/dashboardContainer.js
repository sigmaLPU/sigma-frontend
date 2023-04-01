// react imports
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// component import

// other imports
import sun from './resource/sun.png';
import moon from './resource/moon.png';
import creditTransferImg from './resource/creditTransfer.png';
import semesterExchangeImg from './resource/semesterExchange.png';
import mouImg from './resource/mou.png';
import openLeadsImg from './resource/openLeads.png';
import templateSectionImg from './resource/templateSection.png';
import trainingModalImg from './resource/trainingModal.png';
import { Autocomplete, Icon, IconButton, TextField } from '@mui/material';
import { height } from '@mui/system';
import { Restore } from '@mui/icons-material';

// function defination
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  } // add zero in front of numbers < 10
  return i;
}

function convertTZ(date, tzString) {
  return new Date(
    (typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {
      timeZone: tzString,
    })
  );
}

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
}

function LinkButton({ url, name }) {
  const navigate = useNavigate();

  const ButtonCSS = {
    cursor: 'pointer',
  };

  return (
    <div style={ButtonCSS}>
      <span onClick={() => navigate(url)}>{name}</span>
    </div>
  );
}


function TimeComponent({id}){
  

  const [selectedCity, setSelectedCity] = useState(() => {
    // retrieve previously selected city from localStorage if available
    const city = localStorage.getItem('selectedCity '+id);
    if (city) {
      return JSON.parse(city);
    }
    return null;
  });
  const [currentTime, setCurrentTime] = useState('00:00');
  const [currentImage, setCurrentImage] = useState(sun);

  const cities = [
    { name: 'Abidjan', timeZone: 'Africa/Abidjan' },
    { name: 'Delhi', timeZone: 'Asia/Kolkata' },
    { name: 'Cairo', timeZone: 'Africa/Cairo' },
    { name: 'Melbourne', timeZone: 'Australia/Melbourne' },
    { name: 'New York', timeZone: 'America/New_York' },
  ];

  const timeCardCSS = {
    border: '1px solid #F07F1A',
    minWidth: '15rem',
    minHeight: '5rem',
    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    paddingTop: '0.5rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    borderRadius: '8px',
    marginTop: '1rem',
   
  };

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (selectedCity) {
      const intervalId = setInterval(() => {
        const today = convertTZ(new Date(), selectedCity.timeZone);
        let h = today.getHours();
        let m = today.getMinutes();
        if (h >= 18 || h <= 6) {
          setCurrentImage(moon);
        } else {
          setCurrentImage(sun);
        }
        m = checkTime(m);
        setCurrentTime(h + ':' + m);
        forceUpdate();
      }, 1000);
  
      return () => clearInterval(intervalId);
    }
  }, [selectedCity]);

  const handleCityChange = (event, newValue) => {
    setSelectedCity(newValue);
    // store selected city in localStorage
    localStorage.setItem('selectedCity '+id, JSON.stringify(newValue));
  };

  const handleResetCity = () => {
    setSelectedCity(null);
    // remove selected city from localStorage
    localStorage.removeItem('selectedCity '+id);
  };
  


  return (
    <div>
     
      <div style={timeCardCSS}>
        {selectedCity ? (
          <>
            <div>
              <img src={currentImage} style={{ height: '4rem' }} />
            </div>
            <div
              style={{
                fontWeight: '800',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: '1',
              }}
            >
              <span>{currentTime}</span>
              <span>{selectedCity.name}</span>
              <IconButton onClick={() => setSelectedCity(null)}>
                <Restore />
              </IconButton>
            </div>
          </>
        ) : (
          <div
            style={{
              fontWeight: '800',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: '1',
            }}
          >
            <span> <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cities}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        onChange={handleCityChange}
        renderInput={(params) => <TextField {...params} label="City" />}
      /></span>
          </div>
        )}
      </div>
    </div>
  );
}





export default function Dashboard(props) {

  
  const navigate = useNavigate();
  const forceUpdate = useForceUpdate();

  const username = localStorage.getItem('name')

  const routes = [
    { name: 'Open Leads', url: '/openLeads', img: openLeadsImg },
    { name: 'Partner University', url: '/mouMaster', img: mouImg },
    { name: 'Credit Tranfer', url: '/student/:id', img: creditTransferImg },
    {
      name: 'Semester Exchange',
      url: '/semesterExchange',
      img: semesterExchangeImg,
    },
    { name: 'Template Section', url: '/templates', img: templateSectionImg },
    { name: 'Training Modules', url: '/training', img: trainingModalImg },
  ];


  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '90vh' }}>
      {/*Top part*/}
      <div style={{ height: '15rem' }}>
        <div style={{height:'5rem', display:'flex', justifyContent:'space-around'}}>

        <TimeComponent id={1}  />
        <TimeComponent id={2} />
        <TimeComponent id={3}  />
        <TimeComponent id={4} />
        <TimeComponent id={5}  />
        </div>
        

        <div>
          <div
            style={{
              fontSize: '4rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2rem',
            }}
          >
            <span style={{ textAlign: 'center' }}>Hello, {username}</span>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              fontStyle: 'italic',
              fontWeight: '700',
              fontSize: '1.3rem',
            }}
          >
            <span style={{ textAlign: 'center' }}>
              “If you only do what you can do, you will never be more than you
              are now.” ― Master Oogway. t
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: '1.5rem',
          borderBottom: '1px solid #F07F1A',
          filter: 'blur(2px)',
        }}
      ></div>

      {/*Bottom part*/}
      <div
        style={{
          flexGrow: '2',
          display: 'flex',
          columnGap: '2rem',
          alignContent: 'space-between',
          alignItems: 'flex-start',
          marginTop: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {routes.map((item) => (
          <div
            onClick={() => navigate(item?.url)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <img
              src={item?.img}
              style={{
                maxWidth: '417px',
                maxHeight: '240px',
                borderRadius: '8px',
                border: '1px solid #F07F1A',
              }}
            />
            <span style={{ textAlign: 'center', fontSize: '1.3rem' }}>
              {item?.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
