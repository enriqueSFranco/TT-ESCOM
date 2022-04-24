import {useState} from 'react';

const INITIAL_PAGE = 1;

/**
 * @param {Array} data
 **/
export const usePagination = (data, itemsForPage) => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  let maxPage = Math.ceil(data / itemsForPage);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsForPage;
    const end = begin + itemsForPage;
    return data.slice(begin, end);
  };


  const nextPage = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  const prevPage = () => {
    setCurrentPage(currentData => Math.max(currentPage - 1, INITIAL_PAGE))
  };

  const jump = page => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  };

  return { currentData, nextPage, prevPage, jump, maxPage };
};
