// src/services/api.js
import axios from 'axios';

const API_URL = 'https://api.example.com';

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details', error);
    throw error;
  }
};
