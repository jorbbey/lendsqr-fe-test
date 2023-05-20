import React, { FC, useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import '../styles/Pagination.scss'
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [pageRange, setPageRange] = useState<number[]>([]);

  const generatePageRange = () => {
    const range = [];
    const maxVisiblePages = 5;

    const startPage = Math.max(
      currentPage - Math.floor(maxVisiblePages / 2),
      1
    );
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    setPageRange(range);
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  useEffect(() => {
    generatePageRange();
  }, [currentPage, totalPages]);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const renderPageLinks = () => {
    const links = pageRange.map((page) => (
      <li key={page} className={page === currentPage ? "current" : ""}>
        <a href={`#${page}`} onClick={() => handlePageChange(page)}>
          {page}
        </a>
      </li>
    ));

    // Add ellipsis before the first page link if it's not the first page
    if (pageRange.length > 0 && pageRange[0] !== 1) {
      links.unshift(
        <li key="ellipsis-start">
          <span>...</span>
        </li>
      );
    }

    // Add ellipsis after the last page link if it's not the last page
    if (
      pageRange.length > 0 &&
      pageRange[pageRange.length - 1] !== totalPages
    ) {
      links.push(
        <li key="ellipsis-end">
          <span>...</span>
        </li>
      );
    }

    return links;
  };

  return (
    <div>
      <nav data-pagination>
        <a href="#!" onClick={goToPreviousPage}>
          <FaAngleLeft />
        </a>
        <ul>{renderPageLinks()}</ul>
        <a href="#!" onClick={goToNextPage}>
          <FaAngleRight />
        </a>
      </nav>
    </div>
  );
};
