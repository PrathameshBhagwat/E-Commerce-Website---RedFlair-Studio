import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

// API service object
const api = {
  // Get all products
  getAllProducts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw new Error('Failed to fetch products');
    }
  },

  // Get single product by ID
  getProductById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw new Error('Failed to fetch product details');
    }
  },

  // Get products by category
  getProductsByCategory: async (category) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/category/${category}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw new Error('Failed to fetch products by category');
    }
  },

  // Get all categories
  getAllCategories: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products/categories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Failed to fetch categories');
    }
  }
};

export default api;