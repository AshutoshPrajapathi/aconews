import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center mt-4 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)} // Go to previous page
        disabled={currentPage === 1}
        className={`flex items-center justify-center w-10 h-10 ${currentPage === 1 ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"} rounded-full transition-colors duration-300 ease-in-out ${currentPage === 1 ? "cursor-not-allowed" : "hover:bg-blue-600"}`}
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <span className="text-lg font-medium">
        Page {currentPage}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)} // Go to next page
        disabled={currentPage >= totalPages}
        className={`flex items-center justify-center w-10 h-10 ${currentPage >= totalPages ? "bg-gray-300 text-gray-600" : "bg-blue-500 text-white"} rounded-full transition-colors duration-300 ease-in-out ${currentPage >= totalPages ? "cursor-not-allowed" : "hover:bg-blue-600"}`}
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
