import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState(""); // State for search input
  const navigate = useNavigate(); // For navigation

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (query.trim()) {
      navigate(`/search?q=${query}`); // Navigate to search results page with query
      setQuery(""); // Clear search input
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search news..."
        className="border border-gray-300 rounded p-2 flex-grow"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;