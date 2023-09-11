/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import thunks from './thunks';

const initialState = {
  quizzes: [],
};

const quizzesSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchQuizzesThunk.fulfilled, (state, { payload }) => {
      state.quizzes = payload.data;
    });
  },
});

export default quizzesSlice.reducer;
