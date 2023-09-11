import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { fetchQuizzes } from '../../api/api';

const fetchQuizzesThunk = createAsyncThunk(
  `${moduleName}/fetchQuizzesThunk`,
  async () => {
    const response = await fetchQuizzes();
    return response;
  },
);

export default {
  fetchQuizzesThunk,
};
