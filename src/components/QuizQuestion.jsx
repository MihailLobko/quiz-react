import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';

const QuizQuestion = ({
  quiz,
  currentQuestionIndex,
  onAnswerClick,
}) => {
  const question = quiz.questions[currentQuestionIndex];

  return (
      <Card>
        <CardMedia
          component="img"
          height="500"
          src={`${process.env.PUBLIC_URL}/${quiz.imageUrl}`}
          alt={quiz.title}
        />
        <CardContent>
          <Typography variant="h5">{quiz.title}</Typography>
          <Typography variant="body1">
            Question {currentQuestionIndex + 1}/{quiz.questions.length}
          </Typography>
          <Typography variant="body2">{question.question}</Typography>
          <List>
            {question.answers.map((answer, index) => (
              <ListItem key={index}>
                <ListItemButton onClick={() => onAnswerClick(index)}>
                    {index + 1}) {answer}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
  );
};

export default QuizQuestion;
