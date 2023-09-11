import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
    <Box mt={3} p={2} bgcolor="primary.main" color="white">
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Quiz App. All rights reserved.
      </Typography>
    </Box>
);

export default Footer;
