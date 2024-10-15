import React, { useState } from 'react';
import { ButtonGroup, Button, Typography } from '@mui/material';

const SeverityButtons = () => {
  const [selectedSeverity, setSelectedSeverity] = useState(null);

  // Function to handle button clicks
  const handleButtonClick = (severity) => {
    setSelectedSeverity(severity);
    console.log(`Selected Severity: ${severity}`);
    // Add any additional logic you want to execute on button click
  };

  return (
    <>
      <ButtonGroup>
        {[1, 2, 3, 4, 5].map((severity) => (
          <Button
            key={severity}
            className='header-button-group'
            onClick={() => handleButtonClick(severity)}
            variant={selectedSeverity === severity ? 'contained' : 'outlined'} // Change style based on selection
          >
            {severity}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
};

export default SeverityButtons;
