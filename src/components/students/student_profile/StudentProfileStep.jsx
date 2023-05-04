import { Box, Step, StepLabel, Stepper } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StudentProfileStep = () => {
  const steps = [
    'Fee Paid For CT Program',
    'LPU Approval',
    'Partner University Approval',
    'Recieved Visa',
    'Shared Picture With Logo',
  ];

  const params = useParams();
  const [activeStep, setActiveStep] = React.useState(null);
  const [student, setStudent] = React.useState({});
  const [studentStatus, setStudentStatus] = React.useState();
  const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';
  // const url = 'http://localhost:5000';

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
        alert(err);
      });
  }, [params.id]);

  useEffect(() => {
    axios
      .get(
        `${url}/api/v2/user/studentStatus/${params.id}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        setStudentStatus(res.data.studentStatus);
      })
      .catch((err) => {
        alert(err.message);
      });
    if (studentStatus?.feePaidForCtProgram?.status === 'yes') {
      setActiveStep(0);
    } else if (studentStatus?.ctHeadInterviewDone?.status === 'yes') {
      setActiveStep(1);
    } else if (
      studentStatus?.unconditionalOfferLetterReceived?.status === 'yes'
    ) {
      setActiveStep(2);
    } else if (studentStatus?.visaRecieved?.status === 'yes') {
      setActiveStep(3);
    }
  }, [
    params.id,
    studentStatus?.feePaidForCtProgram?.status,
    studentStatus?.ctHeadInterviewDone?.status,
    studentStatus?.unconditionalOfferLetterReceived?.status,
    studentStatus?.visaRecieved?.status,
  ]);

  return (
    <Box sx={{ width: '100%' }} gridArea="steps">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StudentProfileStep;
