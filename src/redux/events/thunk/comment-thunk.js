import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import axios from "axios";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const cookies = new Cookies();
export const createComment = createAsyncThunk(
  "comment/create",
  async ({ eventId, comment }, { rejectWithValue }) => {
    try {
      const token = await cookies.get("token");
      console.log(comment);
      const response = await axios.post(
        `${apiUrl}/event/add-comment/${eventId}`,
        { comment: comment },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      return response.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "Network error";
      return rejectWithValue(errorMessage);
    }
  }
);

export const getAllCommentsByEventId = createAsyncThunk(
  "comment/getAllbyId",
  async (eventId, { rejectWithValue }) => {
    try {
      const token = await cookies.get("token"); // if you're using cookies to get token

      const response = await fetch(
        `${apiUrl}/event/comments/getall/${eventId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include", // if your backend requires cookies
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch comments");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message || "Failed to fetch comments");
    }
  }
);
