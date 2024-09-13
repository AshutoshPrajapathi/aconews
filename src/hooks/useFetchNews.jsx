import { useState, useEffect } from "react";
import { fetchNews } from "../services/newsService";

const useFetchNews = (query = "", category = "", page = 1) => {
  const [news, setNews] = useState([]); // State for news data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error messages

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNews(query, category, page); // Fetch news based on query, category, and page
        if (data && data.articles) {
          setNews(data.articles); // Update state with fetched news articles
        }
      } catch (err) {
        setError("Failed to fetch news. Please try again later."); // Handle error
      }
      setLoading(false);
    };

    loadNews(); // Load news on mount or parameter change
  }, [query, category, page]);

  return { news, loading, error }; // Return state and functions for reuse
};

export default useFetchNews;