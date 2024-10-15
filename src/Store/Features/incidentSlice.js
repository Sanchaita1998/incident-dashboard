import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  incidentInfo: {},
};

const incidentSlice = createSlice({
  name: 'incident',
  initialState,
  reducers: {
    setIncidentInfo: (state, action) => {
      state.incidentInfo = action.payload;
    },
  },
});

export const { setIncidentInfo } = incidentSlice.actions;
export default incidentSlice.reducer;
