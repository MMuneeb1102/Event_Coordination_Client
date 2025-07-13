import { createSlice } from "@reduxjs/toolkit";
import { createEvent, getAllEvents } from "../thunk/event-thunk";

const initialState = {
  title: '',
  description: '',
  date: '',
  time: '',
  location: '',
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: null,
  events: []
}

const eventSlice = createSlice({
  name: 'create-event',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetEventState: (state) => state.initialState,

    updateEvents: (state, action) =>{
        state.events.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    //CreateEvent
    builder
      .addCase(createEvent.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });

      //getAllEvents
      builder.addCase(getAllEvents.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});


export const { updateField, resetEventState, updateEvents } = eventSlice.actions;
export default eventSlice.reducer;