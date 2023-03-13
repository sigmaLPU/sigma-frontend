// react imports
import React, { useEffect, useState } from 'react';

// component import
import { NavSideBarLayout } from '../routes';


import MeetingBasic from './MeetingBasic';
import MeetingAttachment from './MeetingAttachment';
import MeetingOutcome from './MeetingOutcome';
import MeetingNotes from './MeetingNotes';
import MeetingParticipants from './MeetingParticipants';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// function defination
export default function MeetingProfile(props) {
  const params = useParams();

  const { id } = params;
  const [data, setData] = useState({});
    const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';


  useEffect(() => {
    const fetchMeeting = async () => {
      const { data } = await axios.get(
        `${url}/api/v2/meeting/single/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      setData(data.meeting);
    };
    fetchMeeting();
  }, [id]);


  return (
    <div>
      <NavSideBarLayout childCSS={{ marginTop: '4rem' }}>
        {/*Whole window*/}

        <Box
          display="grid"
          gap="20px"
          gridTemplateAreas={`
          'basic  basic  attachment'
          'outcome outcome attachment'
          'note note participants'          
        `}
        >
          <MeetingBasic data={data} />
          <MeetingOutcome data={data} />
          <MeetingNotes data={data} />
          <MeetingParticipants data={data} />
          <MeetingAttachment data={data} />
        </Box>
      </NavSideBarLayout>
    </div>
  );
}
