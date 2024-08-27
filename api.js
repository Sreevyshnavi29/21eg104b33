// src/services/api.js

// Base URL of the API
const API_BASE_URL = 'http://20.244.56.144/test';

// Function to fetch top N products
export const fetchTopProducts = async (company, category, topN, minPrice, maxPrice) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/companies/${company}/categories/${category}/products?top=${topN}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};
