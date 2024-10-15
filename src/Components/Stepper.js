import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';

function StepperComponent({ steps, activeStep }) {
  return (
    <Stepper activeStep={activeStep} className='StepperArea'>
      {steps.map((label) => (
        <Step key={label} className='Stepper-title'>
          <StepLabel >{label}</StepLabel>
          <StepContent>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
}

export default StepperComponent;