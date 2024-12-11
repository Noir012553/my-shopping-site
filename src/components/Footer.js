// src/components/Footer.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Typography variant="body1">© 2024 My Shopping Site</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
