// src/pages/Homepage.js

import React from 'react';
import ProductList from '../components/ProductList';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  productList: {
    marginTop: theme.spacing(4),
  },
}));

const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1" className={classes.title}>
        Chào Mừng Đến Với Trang Mua Sắm Của Tôi
      </Typography>
      <div className={classes.productList}>
        <ProductList />
      </div>
    </div>
  );
};

export default Homepage;
