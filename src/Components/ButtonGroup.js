import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

const ButtonGroups = ({ options }) => {
  return (
    <ButtonGroup variant="contained">
      {options.map((option, index) => (
        <Button key={index}>{option}</Button>
      ))}
    </ButtonGroup>
  );
};

export default ButtonGroups;