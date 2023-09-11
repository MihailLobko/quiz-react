import React from 'react';
import {
  Card, CardContent, CardActions, Typography, Button,
} from '@mui/material';

const QuizCard = ({ quiz, onStartQuiz, onShowMore }) => (
    <Card>
      <CardContent>
        <Typography variant="h6">{quiz.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {quiz.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onStartQuiz} color="primary">
          Start Quiz
        </Button>
        <Button onClick={onShowMore} color="primary">
          Show More
        </Button>
      </CardActions>
    </Card>
);

export default QuizCard;
