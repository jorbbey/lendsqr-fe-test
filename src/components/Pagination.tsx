import React, { FC, MouseEvent } from "react";
import '../styles/Pagination.scss'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevPage = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = (): JSX.Element[] => {
    const maxVisiblePages = 5; // Maximum number of visible page numbers (excluding ellipsis)
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      // If total pages are less than or equal to maxVisiblePages, display all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
      const isLeftBoundary = currentPage <= halfMaxVisiblePages + 1;
      const isRightBoundary = currentPage >= totalPages - halfMaxVisiblePages;

      // Display page numbers near the current page and add ellipsis where necessary
      for (let i = 1; i <= totalPages; i++) {
        if (
          i === 1 ||
          i === totalPages ||
          (i >= currentPage - halfMaxVisiblePages &&
            i <= currentPage + halfMaxVisiblePages)
        ) {
          pageNumbers.push(i);
        } else if (
          isLeftBoundary &&
          i === currentPage + halfMaxVisiblePages + 1
        ) {
          pageNumbers.push("...");
        } else if (
          isRightBoundary &&
          i === currentPage - halfMaxVisiblePages - 1
        ) {
          pageNumbers.push("...");
        }
      }
    }

    return pageNumbers.map((pageNumber, index) => (
      <li key={index} className={pageNumber === currentPage ? "current" : ""}>
        {pageNumber === "..." ? (
          <span>{pageNumber}</span>
        ) : (
          <a
            href={`#${pageNumber}`}
            onClick={(event) => onPageChange(pageNumber as number, event)}
          >
            {pageNumber}
          </a>
        )}
      </li>
    ));
  };

  return (
    <div>
      <nav data-pagination>
        <a
          href="#!"
          className={currentPage === 1 ? "disabled" : ""}
          onClick={handlePrevPage}
        >
          <FaAngleLeft />
        </a>
        <ul>{renderPageNumbers()}</ul>
        <a
          href="#!"
          className={currentPage === totalPages ? "disabled" : ""}
          onClick={handleNextPage}
        >
          <FaAngleRight />
        </a>
      </nav>
    </div>
  );
};
