import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import thunks from '../store/quizzes/thunks';
import QuizGrid from './QuizGrid';
import QuizModal from './QuizModal';
import LoadingSpinner from './LoadingSpinner';

const MainContent = () => {
  const { quizzes } = useSelector((state) => state.quizzesReducer);
  const dispatch = useDispatch();

  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(thunks.fetchQuizzesThunk());
    setLoading(false);
  }, [dispatch]);

  const handleShowMore = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleCloseModal = () => {
    setSelectedQuiz(null);
  };

  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(null);
    navigate(`/quiz/${quiz.title}`, {
      state: {
        quiz,
      },
    });
  };

  return (
    <Container maxWidth="md">
    <Typography variant="h4" align="center" mt={4}>
      Welcome to the Quiz App!
    </Typography>
    {loading
      ? (<LoadingSpinner />)
      : (<QuizGrid quizzes={quizzes} onStartQuiz={handleStartQuiz} onShowMore={handleShowMore} />)
    }
    <QuizModal quiz={selectedQuiz} onClose={handleCloseModal} onStartQuiz={handleStartQuiz} />
  </Container>
  );
};

export default MainContent;
