import React, { useState, useEffect, useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import { fetchNews } from "../services/newsService";
import NewsList from "../components/news/NewsList";
import Loader from "../components/common/Loader";
import Pagination from "../components/common/Pagination";

const categories = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
]; // Predefined categories

const Categories = () => {
  const { news, setNews } = useContext(NewsContext); // Use context to manage news state
  const [selectedCategory, setSelectedCategory] = useState("business"); // Default category
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch news when the component mounts or when the selectedCategory changes
  useEffect(() => {
    const loadCategoryNews = async () => {
      setLoading(true); // Set loading to true before fetching data
      const data = await fetchNews(selectedCategory); // Fetch news for the selected category
      if (data && data.articles) {
        setNews(data.articles); // Update context state with fetched news
      }
      setLoading(false); // Set loading to false after data is fetched
    };
    loadCategoryNews();
  }, [selectedCategory, setNews]);

  return (
    <div className="container mx-auto p-4">
      {/* Creative Headline */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
        Explore the Latest Trends!
      </h1>

      {/* Category Selection Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)} // Set selected category
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-300 transform shadow-lg whitespace-normal break-words ${
              selectedCategory === category
                ? "bg-blue-600 text-white scale-105"
                : "bg-gray-200 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* News List or Loader */}
      {loading ? (
        <Loader /> // Show loader while fetching data
      ) : (
        <NewsList news={news} /> // Display news list when data is available
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)} // Handle page change
      />
    </div>
  );
};

export default Categories;
