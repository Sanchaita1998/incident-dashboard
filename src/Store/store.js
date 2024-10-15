// store.js
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import incidentReducer from "./incidentSlice"; 

export const store = configureStore({
  reducer: {
    form: formReducer,
    incident: incidentReducer, // Add the form reducer
  },
});
