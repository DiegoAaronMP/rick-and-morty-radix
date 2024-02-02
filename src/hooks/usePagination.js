import { useState } from "react";


export const usePagination = (initialPage) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return {
        currentPage, 
        nextPage,
        prevPage,
    }
}