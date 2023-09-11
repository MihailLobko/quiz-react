import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

const QuizFinished = ({
  quiz, timeRemaining, score, onRestartQuiz, onMainPage,
}) => (
  <Card>
    <CardMedia
      component="img"
      height="500"
      src={`${process.env.PUBLIC_URL}/${quiz.imageUrl}`}
      alt={quiz.title}
    />
    <CardContent>
      <Typography variant="h5">Quiz Finished!</Typography>
      <Typography variant="body1">
        Total Time: {quiz.timeEstimate * 60 - timeRemaining} seconds
      </Typography>
      <Typography variant="body1">Score: {score}</Typography>
      <Button variant="contained" onClick={onRestartQuiz}>
        Restart Quiz
      </Button>
      <Button variant="contained" onClick={onMainPage}>
          Return to Main Page
        </Button>
    </CardContent>
  </Card>
);

export default QuizFinished;
