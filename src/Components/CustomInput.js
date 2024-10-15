import { TextField } from '@mui/material';

const CustomInput = ({ label, value, onChange }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      variant="outlined"
      size="small"
    />
  );
};

export default CustomInput;
