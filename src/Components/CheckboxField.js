import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const CheckboxField = ({ label, name, value, onChange })=> {
  return (
    <FormControlLabel
      control={<Checkbox checked={value} onChange={onChange} name={name} />}
      label={label}
    />
  );
}

export default CheckboxField;