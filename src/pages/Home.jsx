import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "../context/NewsContext";
import { fetchNews } from "../services/newsService";
import NewsList from "../components/news/NewsList";
import Loader from "../components/common/Loader";
import Pagination from "../components/common/Pagination";

const Home = () => {
  const { news, setNews } = useContext(NewsContext); // Use context to manage news state
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [currentPage, setCurrentPage] = useState(1); // State for pagination

  // Fetch news when the component mounts or when the currentPage changes
  useEffect(() => {
    const loadNews = async () => {
      setLoading(true); // Set loading to true before fetching data
      const data = await fetchNews("", currentPage); // Fetch news without any search query
      if (data && data.articles) {
        setNews(data.articles); // Update context state with fetched news
      }
      setLoading(false); // Set loading to false after data is fetched
    };
    loadNews();
  }, [currentPage, setNews]);

  return (
    <div className="container mx-auto p-4">
     <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500  mb-6 text-center animate-pulse">
  Latest News
</h1>

      {loading ? (
        <Loader /> // Show loader while fetching data
      ) : (
        <NewsList news={news} /> // Display news list when data is available
      )}
      <Pagination
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)} // Handle page change
      />
    </div>
  );
};

export default Home;