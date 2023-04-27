import React, { useState } from 'react';

import { NavSideBarLayout } from '../../routes';
import ProgressBar from './ProgressBar';
import arrow from './arrow.svg';
import { Box } from '@mui/material';
import StudentNotes from './StudentNotes';
import StudentProfileBasic from './StudentProfileBasic';
import StudentProfileStep from './StudentProfileStep';
import StudentProfileMain from './StudentProfileMain';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import StudentProfileExtra from './StudentProfileExtra';

export default function StudentProfile(props) {
  const params = useParams();

  const [student, setStudent] = useState({});
  const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';
  // const url = 'http://localhost:5000';

  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant, message) => () => {
    enqueueSnackbar(message, { variant });
  };

  useEffect(() => {
    axios
      .get(
        `${url}/api/v2/user/student/${params.id}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        setStudent(res.data.student);
      })
      .catch((err) => {
        handleClickVariant('error', 'Error')();
      });
  }, [params.id]);

  const [status, setStatus] = useState('Filled Ct On Ums');

  return (
    <div>
      <NavSideBarLayout childCSS={{ marginTop: '4rem' }}>
        <div className="App">{/* <ProgressBar /> */}</div>

        <Box
          display="grid"
          gap="20px"
          gridTemplateAreas={`
          'steps steps steps'
          'basic basic notes'
          'main  main   notes'  
          'main  main  notes'  
          'extra extra extra'          
        `}
        >
          <StudentProfileStep />
          <StudentProfileBasic
            data={student}
            status={status}
            setStatus={setStatus}
          />
          <StudentNotes data={student?.studentDetails?.notes} />
          <StudentProfileMain />
          <StudentProfileExtra status={status} setStatus={setStatus} />
        </Box>
      </NavSideBarLayout>
    </div>
  );
}
