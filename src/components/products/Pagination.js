/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  // eslint-disable-next-line no-magic-numbers
  for (let num = 1; num <= Math.ceil(totalPosts / postsPerPage); num++) {
    pageNumbers.push(num);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <span onClick={() => paginate(number)} className="page-link">
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
