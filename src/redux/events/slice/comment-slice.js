// src/redux/slices/commentSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createComment, getAllCommentsByEventId } from '../thunk/comment-thunk';

const commentSlice = createSlice({
  name: 'comment-slice',
  initialState: {
    comments: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: null,
    isPageLoading: true
  },
  reducers: {
    resetCommentState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.errorMessage = null;
    },
    loadComments: (state, action) => {
      state.comments = action.payload;
    },
    updateComments: (state, action) => {
      state.comments.push(action.payload)
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comments.push(action.payload); // new comment
      })
      .addCase(createComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });

      //get all comments
      builder.addCase(getAllCommentsByEventId.pending, (state) => {
        state.isPageLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(getAllCommentsByEventId.fulfilled, (state, action) => {
        state.isPageLoading = false;
        state.isSuccess = true;
        state.comments = action.payload
        console.log(action.payload)
      })
      .addCase(getAllCommentsByEventId.rejected, (state, action) => {
        state.isPageLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { resetCommentState, loadComments } = commentSlice.actions;
export default commentSlice.reducer;
