import React from "react";
import NewsItem from "./NewsItem";

const NewsList = ({ news }) => {
  if (!news || news.length === 0) {
    return <p className="text-center text-gray-500">No news articles available.</p>; // Message for empty news list
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {news.map((article, index) => (
        <NewsItem key={index} article={article} /> // Render NewsItem for each article
      ))}
    </div>
  );
};

export default NewsList;