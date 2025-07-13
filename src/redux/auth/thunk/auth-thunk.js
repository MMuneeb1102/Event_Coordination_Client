import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const signup = createAsyncThunk("auth/signup", async (data, { rejectWithValue })=>{
    try {
        const response = await fetch(`${apiUrl}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            credentials: 'include',
            body: JSON.stringify(data)
        })

        const responseData = response.json();

        if(!response.ok){
            return rejectWithValue(responseData?.message || "Signup failed");
        }

        if (responseData.token) {
            Cookies.set("token", responseData.token, { expires: 7 });
        }

        return responseData
    } catch (error) {
        return rejectWithValue(error.message || "Network error");
    }
})

export const signin = createAsyncThunk("auth/signin", async (data, { rejectWithValue })=>{
    try {
        const response = await fetch(`${apiUrl}/auth/signin`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }, 
            credentials: 'include',
            body: JSON.stringify(data)
        })

        const responseData = response.json();

        if(!response.ok){
            return rejectWithValue(responseData?.message || "Signin failed");
        }

        if (responseData.token) {
            Cookies.set("token", responseData.token, { expires: 1 });
            
        }

        return responseData
    } catch (error) {
        return rejectWithValue(error.message || "Network error");
    }
})