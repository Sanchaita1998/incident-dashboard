import React from 'react';
import TextField from '@mui/material/TextField';

function InputField({ label, name, value, onChange }) {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth
    />
  );
}

export default InputField;