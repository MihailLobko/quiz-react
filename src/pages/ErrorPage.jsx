import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" mt={4}>
        Oops! Sorry, an unexpected error has occurred.
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Typography>
    </Container>
  );
}
