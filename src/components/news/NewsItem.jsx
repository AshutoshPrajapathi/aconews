import React from "react";

const NewsItem = ({ article }) => {
  const { title, description, url, image, source } = article; // Destructure article properties

  return (
    <div className="news-item bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy" // Lazy loading for better performance
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          {description}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-500 hover:underline transition-colors duration-300"
        >
          Read More
        </a>
        <p className="text-xs text-gray-500 mt-2">
          Source: {source?.name}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
