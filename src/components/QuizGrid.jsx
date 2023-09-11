import React from 'react';
import { Grid } from '@mui/material';
import QuizCard from './QuizCard';

const QuizGrid = ({ quizzes, onStartQuiz, onShowMore }) => (
    <Grid container spacing={3} mt={4}>
      {quizzes.map((quiz, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <QuizCard
            quiz={quiz}
            onStartQuiz={() => onStartQuiz(quiz)}
            onShowMore={() => onShowMore(quiz)}
          />
        </Grid>
      ))}
    </Grid>
);

export default QuizGrid;
