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


function TimeComponent(){

  const [timeState, setTimeState] = useState([
    { name: 'Abidjan', time: '12:03', img: sun, timeZone: 'Africa/Abidjan' },
    { name: 'Delhi', time: '12:03', img: moon, timeZone: 'Asia/Kolkata' },
    { name: 'Cairo', time: '12:03', img: sun, timeZone: 'Africa/Cairo' },
    {name: 'Melbourne',time: '12:03',img: moon,timeZone: 'Australia/Melbourne',},
  ]);

  const timeCardCSS = {
    border: '1px solid #F07F1A',
    minWidth: '15rem',
    minHeight: '5rem',
    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    borderRadius: '8px',
  };

  const forceUpdate = useForceUpdate();

  useEffect(() => {

    const intervalId = setInterval(() => {
      var temp = timeState;
      for (var obj of temp) {
        var today = convertTZ(new Date(), obj['timeZone']);
        let h = today.getHours();
        let m = today.getMinutes();
        if (h >= 18 || h <= 6) {
          // console.log("moon---> ",h)
          obj['img'] = moon;
        } else {
          // console.log("sun---> ",h)
          obj['img'] = sun;
        }
        m = checkTime(m);
        obj['time'] = h + ':' + m;
      }
      setTimeState(temp)
      // console.log(timeState)
      forceUpdate()
    },1000)

    return ()=>clearInterval(intervalId)
  },[])


  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      {timeState.map((item) => (
        <div style={timeCardCSS}>
          <div>
            <img src={item?.img} style={{ height: '4rem' }} />
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
            <span>{item?.time}</span>
            <span>{item?.name}</span>
          </div>
          </div>
      ))}
    </div>
  )
}

export default function Dashboard(props) {
  const navigate = useNavigate();
  const forceUpdate = useForceUpdate();

  const username = localStorage.getItem('name')

  const routes = [
    { name: 'Open Leads', url: '/openLeads', img: openLeadsImg },
    { name: 'Partner University', url: '/mouMaster', img: mouImg },
    { name: 'Credit Tranfer', url: '/creditTransfer', img: creditTransferImg },
    {
      name: 'Semester Exchange',
      url: '/semesterExchange',
      img: semesterExchangeImg,
    },
    { name: 'Template Section', url: '/templates', img: templateSectionImg },
    { name: 'Training Moduls', url: '/training', img: trainingModalImg },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '90vh' }}>
      {/*Top part*/}
      <div style={{ height: '15rem' }}>

        <TimeComponent />

        <div>
          <div
            style={{
              fontSize: '4rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem',
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
