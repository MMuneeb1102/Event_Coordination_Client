import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'universal-cookie';
// Async thunk for creating an event
const cookies = new Cookies();
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
export const createEvent = createAsyncThunk(
  'event/createEvent',
  async (eventData, thunkAPI) => {
    try {
      const token = await cookies.get('token')
      const response = await axios.post(`${apiUrl}/event/create-event`, eventData, {
        withCredentials: true, // send cookies if needed
        headers: {
          'authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getAllEvents = createAsyncThunk(
  'event/getAllEvents',
  async (_, thunkAPI) => {
    try {
      const token = await cookies.get('token')
      console.log(token)
      const response = await axios.get(`${apiUrl}/event/getall`, {
        withCredentials: true,
        headers: {
            'authorization': `Bearer ${token}`
        }
      });
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getEventById = createAsyncThunk(
  'event/getEventById',
  async (eventId, thunkAPI) => {
    try {
        const token = await cookies.get('token')
      const response = await axios.get(`${apiUrl}/event/get-event/${eventId}`, {
        withCredentials: true,
        headers: {
            'authorization': `Bearer ${token}`
        }
      });
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
