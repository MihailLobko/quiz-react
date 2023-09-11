import React from 'react';
import {
  Modal, Box, Typography,
} from '@mui/material';

const QuizModal = ({ quiz, onClose }) => (
  quiz != null && (<Modal open={quiz} onClose={onClose}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4,
        }}>
          <Typography variant="h5">{quiz.title}</Typography>
          <img src={quiz.imageUrl} alt={quiz.title} style={{ width: '400px' }}/>
          <Typography variant="body1">{quiz.fullDescription}</Typography>
          <Typography variant="body2">Time Estimate: {quiz.timeEstimate} min</Typography>
        </Box>
      </Modal>)
);

export default QuizModal;
