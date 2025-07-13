import { configureStore } from '@reduxjs/toolkit';
import { signinReducer, signupReducer } from './auth/slice/auth-slice';
import eventSlice from './events/slice/event-slice'
export const store = configureStore({
  reducer: {
    signin: signinReducer,
    signup: signupReducer,
    events: eventSlice

  },
});
