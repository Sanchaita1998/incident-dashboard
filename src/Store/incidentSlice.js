// incidentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incidentDateTime: "2024-08-29T16:00:00",
  reportDateTime: "2024-08-29T16:00:00",
  shift: "Shift I",
  activity: "Select",
  subActivity: "Select",
  lastAccidentDate: "2024-08-29",
  lastAccident: "Select",
  incidentCause: "Select",
  reportedByType: "Employee",
  reportedByStaffName: "Select",
  reportedByEntityName: "SiteRO2"
};

const incidentSlice = createSlice({
  name: "incident",
  initialState,
  reducers: {
    setIncidentDateTime: (state, action) => {
      state.incidentDateTime = action.payload;
    },
    setReportDateTime: (state, action) => {
      state.reportDateTime = action.payload;
    },
    setShift: (state, action) => {
      state.shift = action.payload;
    },
    setActivity: (state, action) => {
      state.activity = action.payload;
    },
    setSubActivity: (state, action) => {
      state.subActivity = action.payload;
    },
    setLastAccidentDate: (state, action) => {
      state.lastAccidentDate = action.payload;
    },
    setLastAccident: (state, action) => {
      state.lastAccident = action.payload;
    },
    setIncidentCause: (state, action) => {
      state.incidentCause = action.payload;
    },
    setReportedByType: (state, action) => {
      state.reportedByType = action.payload;
    },
    setReportedByStaffName: (state, action) => {
      state.reportedByStaffName = action.payload;
    },
    setReportedByEntityName: (state, action) => {
      state.reportedByEntityName = action.payload;
    }
  }
});

export const {
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
} = incidentSlice.actions;

export default incidentSlice.reducer;
