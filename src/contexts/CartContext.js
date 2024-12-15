// src/contexts/CartContext.js

import React, { createContext, useState } from 'react';

// Tạo context cho giỏ hàng
export const CartContext = createContext();

// Định nghĩa thành phần CartProvider để cung cấp context cho các thành phần con
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);  // Khởi tạo state cho giỏ hàng

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCart([...cart, product]);  // Thêm sản phẩm vào giỏ hàng
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));  // Lọc bỏ sản phẩm
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
