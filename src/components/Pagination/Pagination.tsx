import React from "react";
import "./pagination.scss";

interface Props {
  postsPerPage: number,
  totalPosts: number,
  paginate(number:number): any,
}

export const Pagination:React.FC<Props>= ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="displayed__items">
            <a onClick={() => paginate(number)} href="!#" className="link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
