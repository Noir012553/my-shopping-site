// src/services/api.js

import axios from 'axios';

// Đặt URL cơ bản cho API
const API_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';

// Hàm fetchProducts để lấy danh sách sản phẩm từ API
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};

// Hàm fetchProductById để lấy chi tiết sản phẩm theo id từ API
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details', error);
    throw error;
  }
};
