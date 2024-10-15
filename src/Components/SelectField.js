import React, { useState } from "react";
import { TextField, Select, MenuItem, Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useSelector, useDispatch } from "react-redux";
import { setArea, setSubArea, setDepartment, setTextFieldValue } from "../Store/formSlice";


const SelectField = ({ TextFieldVaule }) => {
  const dispatch = useDispatch();
  const { area, subarea, department, textFieldValue } = useSelector((state) => state.form);

  // const [area, setArea] = useState("Select");
  // const [subarea, setSubArea] = useState("Select");
  // const [department, setDepartment] = useState("Select");

  const handleChange = (event) => {
    dispatch(setArea(event.target.value));
  };

  const SubhandleChange = (event) => {
    dispatch(setSubArea(event.target.value));
  };

  const DepartemthandleChange = (event) => {
    dispatch(setDepartment(event.target.value));
  };

  const handleTextFieldChange = (event) => {
    dispatch(setTextFieldValue(event.target.value));
  };


  return (
    <>
      <Box>
        <TextField
          label="Mine"
          variant="outlined"
          fullWidth
          value={TextFieldVaule}
          onChange={handleTextFieldChange}
        />
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <FormControl fullWidth style={{marginTop: "15px"}}>
          <InputLabel id="demo-simple-select-label">Area</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={area}
            label="Area"
            onChange={handleChange}
          >
            <MenuItem value="Select">Select</MenuItem>
            <MenuItem value="Option1">Option 1</MenuItem>
            <MenuItem value="Option2">Option 2</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <FormControl fullWidth style={{marginTop: "15px"}}>
          <InputLabel id="demo-simple-select-label">Sub Area</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={subarea}
            label="Sub Area"
            onChange={SubhandleChange}
          >
            <MenuItem value="Select">Select</MenuItem>
            <MenuItem value="Option1">Option 1</MenuItem>
            <MenuItem value="Option2">Option 2</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <FormControl fullWidth style={{marginTop: "15px"}}>
          <InputLabel id="demo-simple-select-label">Department</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={department}
            label="Department"
            onChange={DepartemthandleChange}
          >
            <MenuItem value="Select">Select</MenuItem>
            <MenuItem value="Option1">Option 1</MenuItem>
            <MenuItem value="Option2">Option 2</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectField;
