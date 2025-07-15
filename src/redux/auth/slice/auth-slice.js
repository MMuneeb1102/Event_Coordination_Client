import { createSlice } from "@reduxjs/toolkit";
import { signin, signup } from "../thunk/auth-thunk";
const signinSlice = createSlice({
  name: "signin",
  initialState: {
    email: "",
    password: "",
    isLoading: false,
    isError: "",
    response: "",
    token: "",
  },
  reducers: {
    updateSigninEmail: (state, action) => {
      state.email = action.payload;
    },
    updateSigninPassword: (state, action) => {
      state.password = action.payload;
    },
    resetSigninState: (state) => {
      state.email = "";
      state.password = "";
      state.isLoading = false;
      state.isError = null;
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(signin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    });

    builder.addCase(signin.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = { message: action.payload, code: "SIGNIN_FAILED" };
    });
  },
});

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    removeToken: (state, action) => {
      state.token = null;
    },
  },
});

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isLoading: false,
    isError: null,
    response: "",
  },
  reducers: {
    updateSignupName: (state, action) => {
      state.name = action.payload;
    },
    updateSignupEmail: (state, action) => {
      state.email = action.payload;
    },
    updateSignupPassword: (state, action) => {
      state.password = action.payload;
    },
    updateSignupConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },

    resetSignupState: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
      state.confirmPassword = "";
      state.isLoading = false;
      state.isError = null;
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    });

    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = { message: action.payload, code: "SIGNUP_FAILED" };
    });
  },
});

export const { setToken, removeToken } = tokenSlice.actions;

export const { updateSigninEmail, updateSigninPassword, resetSigninState } =
  signinSlice.actions;

export const {
  updateSignupName,
  updateSignupEmail,
  updateSignupPassword,
  updateSignupConfirmPassword,
  resetSignupState,
} = signupSlice.actions;

export const signinReducer = signinSlice.reducer;
export const signupReducer = signupSlice.reducer;
export const tokenReducer = tokenSlice.reducer;
