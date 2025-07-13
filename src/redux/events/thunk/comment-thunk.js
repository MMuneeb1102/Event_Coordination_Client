import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'
import axios from "axios";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const token = Cookies.get('token');
export const createComment = createAsyncThunk(
  'comment/create',
  async ({ eventId, comment }, { rejectWithValue }) => {
    try {
      console.log(comment)
      const response = await axios.post(
        `http://localhost:3000/event/add-comment/${eventId}`,
        {comment: comment},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response)

      return response.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || 'Network error';
      return rejectWithValue(errorMessage);
    }
  }
);

export const getAllCommentsByEventId = createAsyncThunk(
  'comment/getAllbyId',
  async (eventId, { rejectWithValue }) => {
    // console.log(eventId)
    try {
      const response = await axios.get(`http://localhost:3000/event/comments/getall/${eventId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data; 
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || 'Failed to fetch comments';
      return rejectWithValue(errorMessage);
    }
  }
);