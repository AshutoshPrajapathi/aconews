import axios from 'axios'

// Base URL and API Key (Replace 'YOUR_API_KEY' with your actual key)
const API_KEY = '0467fa1f8401127db629403afc806b33'; // Commented out: Add your API Key here
const BASE_URL = "https://gnews.io/api/v4";

// Fetch news data
export const fetchNews = async (query = "", category = "", page = 1) => {
    try {
      let url = `${BASE_URL}/top-headlines?token=${API_KEY}&page=${page}`;
      
      if (query) {
        url = `${BASE_URL}/search?q=${query}&token=${API_KEY}&page=${page}`;
      } else if (category) {
        url = `${BASE_URL}/top-headlines?topic=${category}&lang=en&country=in&max=10&apikey=${API_KEY}&page=${page}`;
      }
  
      const response = await axios.get(url); // API call
      return response.data; // Return the data from the API response
    } catch (error) {
      console.error("Error fetching news:", error); // Log error for debugging
      throw error;
    }
  };