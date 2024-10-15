import React,{useState} from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  ButtonGroup,
  Button,
  Typography,
  MenuItem
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
    setIncidentDateTime,
    setReportDateTime,
    setShift,
    setActivity,
    setSubActivity,
    setLastAccidentDate,
    setLastAccident,
    setIncidentCause,
    setReportedByType,
    setReportedByStaffName,
    setReportedByEntityName
  } from "../Store/incidentSlice"


const IncidentCard = () => {
    const dispatch = useDispatch();
    const [selectedButton, setSelectedButton] = useState("");
    

  const {
    incidentDateTime,
    reportDateTime,
    shift,
    activity,
    subActivity,
    lastAccidentDate,
    lastAccident,
    incidentCause,
    reportedByType,
    reportedByStaffName,
    reportedByEntityName
  } = useSelector((state) => state.incident); 

  const handleButtonClick = (type) => {
    // Update the selected button state
    setSelectedButton(type);
    // Dispatch the action
    dispatch(setReportedByType(type));
  };




  return (
    <Card>
      <CardHeader title="" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
           <TextField
              label="Incident Date & Time"
              type="datetime-local"
              fullWidth
              value={incidentDateTime}
              onChange={(e) => dispatch(setIncidentDateTime(e.target.value))}
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
              label="Report Date & Time"
              type="datetime-local"
              fullWidth
              value={reportDateTime}
              onChange={(e) => dispatch(setReportDateTime(e.target.value))}
            />
          </Grid>
          <Grid item xs={12}>
            <div className="report-by">

            <Typography variant="h6">Reported By</Typography>  &nbsp;&nbsp;&nbsp;  
            <ButtonGroup>
            <Button 
        className="header-button-group" 
        variant={selectedButton === "Employee" ? 'contained' : 'outlined'} 
        onClick={() => handleButtonClick("Employee")}
        style={{ color: selectedButton === "Employee" ? 'white' : '#0039CE' }}
      >
        Employee
      </Button>
      <Button 
        className="header-button-group" 
        variant={selectedButton === "Contractor" ? 'contained' : 'outlined'} 
        onClick={() => handleButtonClick("Contractor")}
        style={{ color: selectedButton === "Contractor" ? 'white' : '#0039CE' }}

      >
        Contractor
      </Button>
      <Button 
        className="header-button-group" 
        variant={selectedButton === "Visitor" ? 'contained' : 'outlined'} 
        onClick={() => handleButtonClick("Visitor")}
        style={{ color: selectedButton === "Visitor" ? 'white' : '#0039CE' }}

      >
        Visitor
      </Button>
            </ButtonGroup>
            </div>
          </Grid>
          <Grid item xs={6}>
          <TextField
              label="Reported by - Staff Name"
              fullWidth
              value={reportedByStaffName}
              onChange={(e) => dispatch(setReportedByStaffName(e.target.value))}
              select
            >
              <MenuItem value="Select">Select</MenuItem>
            <MenuItem value="Option1">Option 1</MenuItem>
            <MenuItem value="Option2">Option 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
          <TextField
              label="Reported by - Entity Name"
              fullWidth
              value={reportedByEntityName}
              onChange={(e) => dispatch(setReportedByEntityName(e.target.value))}
              select
            >
            <MenuItem value="Select">Select</MenuItem>
            <MenuItem value="Option1">Option 1</MenuItem>
            <MenuItem value="Option2">Option 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <div className="shift">
            <Typography variant="h6">Shift</Typography> &nbsp;&nbsp;&nbsp;
            <ButtonGroup>
      <Button
        className="header-button-group"
        variant={selectedButton === "Shift I" ? 'contained' : 'outlined'}
        onClick={() => handleButtonClick("Shift I")}
        style={{ color: selectedButton === "Shift I" ? 'white' : '#0039CE' }}

      >
        Shift I
      </Button>
      <Button
        className="header-button-group"
        variant={selectedButton === "Shift II" ? 'contained' : 'outlined'}
        onClick={() => handleButtonClick("Shift II")}
        style={{ color: selectedButton === "Shift II" ? 'white' : '#0039CE' }}

      >
        Shift II
      </Button>
      <Button
        className="header-button-group"
        variant={selectedButton === "Shift III" ? 'contained' : 'outlined'}
        onClick={() => handleButtonClick("Shift III")}
        style={{ color: selectedButton === "Shift III" ? 'white' : '#0039CE' }}

      >
        Shift III
      </Button>
      <Button
        className="header-button-group"
        variant={selectedButton === "General" ? 'contained' : 'outlined'}
        style={{ color: selectedButton === "General" ? 'white' : '#0039CE' }}
        onClick={() => handleButtonClick("General")}
      >
        General
      </Button>
    </ButtonGroup>   
            </div>

          </Grid>
          <Grid item xs={6}>
          <TextField
              label="Activity"
              fullWidth
              value={activity}
              onChange={(e) => dispatch(setActivity(e.target.value))}
              select
            >
             <MenuItem value="Select">Select</MenuItem>
            <MenuItem value="Option1">Option 1</MenuItem>
            <MenuItem value="Option2">Option 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
          <TextField
              label="Sub-Activity"
              fullWidth
              value={subActivity}
              onChange={(e) => dispatch(setSubActivity(e.target.value))}
              select
            >
              <MenuItem value="Select">Select</MenuItem>
            <MenuItem value="Option1">Option 1</MenuItem>
            <MenuItem value="Option2">Option 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Date of immediate last Accident"
              type="date"
              fullWidth
              defaultValue="2024-08-29"
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
              label="Incident/Accident Cause"
              fullWidth
              value={incidentCause}
              onChange={(e) => dispatch(setIncidentCause(e.target.value))}
              select
            >
              <MenuItem value="Select">Select</MenuItem>
            <MenuItem value="Option1">Option 1</MenuItem>
            <MenuItem value="Option2">Option 2</MenuItem>
            </TextField>

          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Immediate last Accident"
              fullWidth
              value={lastAccident}
              onChange={(e) => dispatch(setLastAccident(e.target.value))}
              select
            >
               <MenuItem value="Select">Select</MenuItem>
            <MenuItem value="Option1">Option 1</MenuItem>
            <MenuItem value="Option2">Option 2</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default IncidentCard;
