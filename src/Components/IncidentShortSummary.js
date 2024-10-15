import React from 'react';
import { Box, TextField } from '@mui/material';

const IncidentShortSummary = () => {
  return (
    <Box>
      <Box>
        <TextField
          label="Incident Short Summary"
          variant="outlined"
          fullWidth
          defaultValue="Summary"
          sx={{
            width: '260px',  // Custom width
            height: '110px',
            marginBottom:'30px'  // Custom height
          }}
          InputProps={{
            sx: {
              height: '300px', 
             
            }
          }}
        />
      </Box>
      <Box>
        <TextField
          label="Incident Summary"
          variant="outlined"
          fullWidth
          defaultValue="Summary"
          sx={{
            width: '260px',  // Custom width
            height: '110px',  // Custom height
            marginTop:'30px', // Custom margin
             marginBottom:'30px'
          }}
          InputProps={{
            sx: {
              height: '300px', // Custom height for the input field
            }
          }}
        />
      </Box>
      <Box>
        <TextField
          label="Immediate Measures"
          variant="outlined"
          fullWidth
          defaultValue="Summary"
          sx={{
            width: '260px',  // Custom width
            height: '110px',  // Custom height
            marginTop:'30px', // Custom margin
          }}
          InputProps={{
            sx: {
              height: '300px', // Custom height for the input field
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default IncidentShortSummary;
