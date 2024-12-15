// src/components/Footer.js

import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
  icon: {
    margin: theme.spacing(1),
  },
}));

const Footer = ({ siteName = "My Shopping Site", year = new Date().getFullYear() }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="body1">© {year} {siteName}</Typography>
        <div>
          <IconButton className={classes.icon} href="https://facebook.com" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton className={classes.icon} href="https://twitter.com" target="_blank">
            <TwitterIcon />
          </IconButton>
          <IconButton className={classes.icon} href="https://instagram.com" target="_blank">
            <InstagramIcon />
          </IconButton>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
