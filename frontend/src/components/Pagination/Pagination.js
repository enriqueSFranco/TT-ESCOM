import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ total, limit = 5, page, setPage }) => {
  let totalPages = Math.ceil(total / limit);

  const handleClick = (newPage) => setPage(newPage + 1);

  return (
    <div className={styles.container}>
      {totalPages > 0 &&
        [...Array(totalPages)].map((_, index) => (
          <button
            key={`btn-pagination-${index}`}
            onClick={() => handleClick(index)}
            className={
              page === index + 1
                ? `${styles.page_btn} ${styles.active}`
                : styles.page_btn
            }
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
