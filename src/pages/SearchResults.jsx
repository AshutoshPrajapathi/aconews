import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { NewsContext } from "../context/NewsContext";
import { fetchNews } from "../services/newsService";
import NewsList from "../components/news/NewsList";
import Loader from "../components/common/Loader";
import Pagination from "../components/common/Pagination";
import SearchBar from "../components/common/SearchBar";

const SearchResults = () => {
  const { news, setNews } = useContext(NewsContext); // Use context to manage news state
  const [searchParams] = useSearchParams(); // Use URL search parameters to get the search query
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const query = searchParams.get("q") || ""; // Get the search query from URL

  // Fetch news when the component mounts or when the search query/currentPage changes
  useEffect(() => {
    const loadSearchResults = async () => {
      setLoading(true); // Set loading to true before fetching data
      const data = await fetchNews(query, currentPage); // Fetch news based on search query
      if (data && data.articles) {
        setNews(data.articles); // Update context state with fetched news
      }
      setLoading(false); // Set loading to false after data is fetched
    };
    loadSearchResults();
  }, [query, currentPage, setNews]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 leading-tight capitalize">
        {query}
      </h1>
      <SearchBar /> {/* Search bar to allow users to search again */}
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

export default SearchResults;
