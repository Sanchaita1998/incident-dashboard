import React, { useState } from 'react';
import { ButtonGroup, Button, Typography } from '@mui/material';

const TypeButtons = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (buttonType) => {
    setSelectedButton(buttonType); // Set the clicked button
    console.log(`Button clicked: ${buttonType}`);
    // You can perform additional actions here based on the buttonType
  };

  return (
    <>
      
      <ButtonGroup>
        <Button
          className='header-button-group'
          variant={selectedButton === 'UnC' ? 'contained' : 'outlined'}
          onClick={() => handleClick('UnC')}
        >
          UnC
        </Button>
        <Button
          className='header-button-group'
          variant={selectedButton === 'NS' ? 'contained' : 'outlined'}
          onClick={() => handleClick('NS')}
        >
          NS
        </Button>
        <Button
          className='header-button-group'
          variant={selectedButton === 'UnA' ? 'contained' : 'outlined'}
          onClick={() => handleClick('UnA')}
        >
          UnA
        </Button>
        <Button
          className='header-button-group'
          variant={selectedButton === 'MTI' ? 'contained' : 'outlined'}
          onClick={() => handleClick('MTI')}
        >
          MTI
        </Button>
        <Button
          className='header-button-group'
          variant={selectedButton === 'LTI' ? 'contained' : 'outlined'}
          onClick={() => handleClick('LTI')}
        >
          LTI
        </Button>
        <Button
          className='header-button-group'
          variant={selectedButton === 'SBI' ? 'contained' : 'outlined'}
          onClick={() => handleClick('SBI')}
        >
          SBI
        </Button>
        <Button
          className='header-button-group'
          variant={selectedButton === 'Fatality' ? 'contained' : 'outlined'}
          onClick={() => handleClick('Fatality')}
        >
          Fatality
        </Button>
      </ButtonGroup>
    </>
  );
};

export default TypeButtons;
