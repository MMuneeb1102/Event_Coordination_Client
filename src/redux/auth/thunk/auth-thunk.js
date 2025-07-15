import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
import { showAlert } from "../../alert/alert-slice";
import { useDispatch } from "react-redux";
import { setToken } from "../slice/auth-slice";

export const signup = createAsyncThunk(
  "auth/signup",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(`${apiUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // credentials: 'include',
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.log(responseData.message);
        dispatch(showAlert({ text: responseData.message, severity: "error" }));
        return rejectWithValue(responseData?.message || "Signup failed");
      }

      if (responseData.token) {
        Cookies.set("token", responseData.token, { expires: 7 });
        dispatch(setToken(responseData.token));
      }

      return responseData;
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (data, { dispatch, rejectWithValue }) => {
    // const dispatch = useDispatch()
    try {
      const response = await fetch(`${apiUrl}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        dispatch(showAlert({ text: responseData.message, severity: "error" }));
        return rejectWithValue(responseData?.message || "Signin failed");
      }

      if (responseData.token) {
        console.log("getting token");
        Cookies.set("token", responseData.token, { expires: 7 });
        dispatch(setToken(responseData.token));
      }

      return responseData;
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);
