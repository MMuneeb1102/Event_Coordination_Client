import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
// Async thunk for creating an event
const token = Cookies.get('token')
export const createEvent = createAsyncThunk(
  'event/createEvent',
  async (eventData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3000/event/create-event', eventData, {
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
        const token = Cookies.get('token')
      const response = await axios.get('http://localhost:3000/event/getall', {
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
        const token = Cookies.get('token')
      const response = await axios.get(`http://localhost:3000/event/get-event/${eventId}`, {
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
