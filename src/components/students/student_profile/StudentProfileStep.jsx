import { Box, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react'

const StudentProfileStep = () => {
    const steps = [
      'Select master blaster campaign settings',
      'Create an ad group',
      'Create an ad',
    ];
  return (
    <Box sx={{ width: '100%' }} gridArea="steps">
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default StudentProfileStep