import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { quizzesReducer } from './quizzes';

const rootReducer = combineReducers({
  quizzesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
