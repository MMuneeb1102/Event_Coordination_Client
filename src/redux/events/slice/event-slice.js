import { createSlice } from "@reduxjs/toolkit";
import { createEvent, getAllEvents, getEventById } from "../thunk/event-thunk";

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
  events: [],
  isevPageLoading: true,
  eventDetails: ""
}

const eventSlice = createSlice({
  name: 'create-event',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetEventState: (state) => {
      state.title = ''
      state.description = '',
      state.date = '',
      state.time = '',
      state.location = '',
      state.isLoading = false
    },
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
        state.isevPageLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });

      //getAllEvents
      builder.addCase(getAllEvents.pending, (state) => {
        state.isevPageLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.isevPageLoading = false;
        state.events = action.payload;
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.isevPageLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });

      builder.addCase(getEventById.pending, (state) => {
        state.isevPageLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.isevPageLoading = false;
        state.eventDetails = action.payload;
      })
      .addCase(getEventById.rejected, (state, action) => {
        state.isevPageLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});


export const { updateField, resetEventState, updateEvents } = eventSlice.actions;
export default eventSlice.reducer;