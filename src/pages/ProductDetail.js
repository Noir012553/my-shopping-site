// src/pages/ProductDetail.js

import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { CartContext } from '../contexts/CartContext';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  productDetail: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
  },
}));

const ProductDetail = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const product = await fetchProductById(id);
        setProduct(product);
      } catch (error) {
        setError('Có lỗi xảy ra khi lấy chi tiết sản phẩm.');
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" className={classes.errorMessage}>
        {error}
      </Typography>
    );
  }

  return (
    <div className={classes.container}>
      <Typography variant="h4" component="h1" gutterBottom>
        {product.name}
      </Typography>
      <Typography variant="body1" className={classes.productDetail}>
        {product.description}
      </Typography>
      <Typography variant="h6" className={classes.productDetail}>
        Giá: ${product.price}
      </Typography>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => addToCart(product)}>
        Thêm vào giỏ hàng
      </Button>
    </div>
  );
};

export default ProductDetail;
