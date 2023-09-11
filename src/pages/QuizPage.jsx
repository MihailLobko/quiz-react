import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuizFinished from '../components/QuizFinished';
import QuizQuestion from '../components/QuizQuestion';
import NavBar from '../components/NavBar';

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [quiz] = useState(location.state.quiz);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(quiz.timeEstimate * 60);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerClick = (selectedAnswerIndex) => {
    const currentQuestion = quiz.questions[currentQuestionIndex];
    if (selectedAnswerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  useEffect(() => {
    if (timeRemaining === 0) {
      setIsQuizFinished(true);
    } else if (!isQuizFinished) {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeRemaining, isQuizFinished]);

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeRemaining(quiz.timeEstimate * 60);
    setIsQuizFinished(false);
  };

  const handleReturnToMainPage = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <Container maxWidth="md">
        {isQuizFinished ? (
          <QuizFinished
            quiz={quiz}
            timeRemaining={timeRemaining}
            score={score}
            onRestartQuiz={handleRestartQuiz}
            onMainPage={handleReturnToMainPage}
          />
        ) : (
          <>
            <QuizQuestion
              quiz={quiz}
              currentQuestionIndex={currentQuestionIndex}
              onAnswerClick={handleAnswerClick}
            />
            <Typography variant="body1">
              Time Remaining: {timeRemaining} seconds
            </Typography>
          </>
        )}
      </Container>
      <NavBar/>
      <Footer />
    </>
  );
};

export default QuizPage;
