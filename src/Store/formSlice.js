// formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  area: "Select",
  subarea: "Select",
  department: "Select",
  textFieldValue: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setArea: (state, action) => {
      state.area = action.payload;
    },
    setSubArea: (state, action) => {
      state.subarea = action.payload;
    },
    setDepartment: (state, action) => {
      state.department = action.payload;
    },
    setTextFieldValue: (state, action) => {
      state.textFieldValue = action.payload;
    },
  },
});

// Export actions
export const { setArea, setSubArea, setDepartment, setTextFieldValue } = formSlice.actions;

// Export reducer
export default formSlice.reducer;
