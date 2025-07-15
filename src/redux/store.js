import { configureStore } from "@reduxjs/toolkit";
import {
  signinReducer,
  signupReducer,
  tokenReducer,
} from "./auth/slice/auth-slice";
import eventSlice from "./events/slice/event-slice";
import commentReducer from "./events/slice/comment-slice";
import alertReducer from "./alert/alert-slice";
export const store = configureStore({
  reducer: {
    signin: signinReducer,
    signup: signupReducer,
    events: eventSlice,
    comments: commentReducer,
    alert: alertReducer,
    token: tokenReducer,
  },
});
