// react imports
import React, { useEffect, useState } from 'react';

// component import
import { NavSideBarLayout } from '../routes';
import { Card, Chip, Table } from '../routes';
import { BasicDetailsMeetingCard, AttachementCard } from '../routes';
import {
  BasicDetailsMeetingModal,
  OutcomeMeetingModal,
  ActionPlanMeetingModal,
  MoMNotesMeetingModal,
  AttachmentMeetingModal,
  ParticipantsMeetingModal,
} from '../routes';

// other imports
import video_icon from './resource/video_icon.png';
import profile_1 from './resource/profile_1.jpg';

import { useNavigate, useDispatch, useSelector } from 'react-redux';
import { getMeetingsSlice, getMeetingsReducer } from '../../redux/routes';
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

  console.log(data);

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
