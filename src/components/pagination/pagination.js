import React from "react";
import "./pagination.css";

const Pagination = ({ todosPerPage, totalTodos, paginate }) => {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNum.push(i);
  }
  return (
    <nav className="pagination-contianer">
      <ul className="pagination-list">
        {pageNum.map((number) => (
          <li key={number}>
            <button
              className="pagination-item"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
