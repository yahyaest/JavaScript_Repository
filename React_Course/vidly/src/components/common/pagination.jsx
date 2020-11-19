import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCounts, pageSize, currentPage, onPageChange } = props;
  //console.log(currentPage);
  const pagesCount = Math.ceil(itemsCounts / pageSize); //Math.ceil convert float to integer greater then or equal to the float number
  // [1 ... pagesCount].map()
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1); // use lodash module

  return (
    <React.Fragment>
      <nav aria-label="...">
        <ul className="pagination pagination-sm">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <button className="page-link" onClick={() => onPageChange(page)} >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

Pagination.propTypes = {
  itemsCounts: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
