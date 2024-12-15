// src/pages/Cart.js

import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  cartContainer: {
    padding: theme.spacing(3),
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1, 0),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  emptyMessage: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
}));

const Cart = () => {
  const classes = useStyles();
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className={classes.cartContainer}>
      <Typography variant="h4" component="h2" gutterBottom>
        Giỏ Hàng Của Bạn
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6" className={classes.emptyMessage}>
          Giỏ hàng của bạn trống.
        </Typography>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} className={classes.cartItem}>
              <span>{item.name} - ${item.price}</span>
              <Button variant="contained" color="secondary" onClick={() => removeFromCart(item.id)}>
                Xóa
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
