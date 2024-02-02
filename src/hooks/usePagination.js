import { useState } from "react";

/**
 * Custom hook for handling pagination state.
 * @param {number} initialPage - The initial page number.
 * @returns {object} pagination - Object containing current page and functions for navigating to the next or previous page.
 */
export const usePagination = (initialPage) => {
    // State to hold the current page
    const [currentPage, setCurrentPage] = useState(initialPage);

    // Function to navigate to the next page.
    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    // Function to navigate to the previous page.
    const prevPage = () => {
        // Ensure the page doesn't go below 1
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    // Return an object containing current page and navigation functions
    return {
        currentPage, 
        nextPage,
        prevPage,
    }
}