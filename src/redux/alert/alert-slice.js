// redux/slices/alertSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  text: "",
  severity: "info", // can be: "success", "error", "warning", "info"
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.show = true;
      state.text = action.payload.text;
      state.severity = action.payload.severity || "info";
    },
    hideAlert: (state) => {
      state.show = false;
      state.text = "";
      state.severity = "";
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
