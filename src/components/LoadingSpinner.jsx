import React from 'react';
import { CircularProgress, Container } from '@mui/material';

const LoadingSpinner = () => (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '50px' }}>
      <CircularProgress />
    </Container>
);

export default LoadingSpinner;
