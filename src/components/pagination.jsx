import React from "react";
import _ from "lodash";
const Pagination = (props) => {
  const pages = _.range(1, props.pageCount + 1);

  return (
    <React.Fragment>
      {" "}
      <nav aria-label="...">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                props.activePage === page ? "active page-item" : "page-item"
              }
              key={page}
            >
              <a onClick={()=>props.onPageChange(page)} className="page-link" href="#">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

// #endregion

export default Pagination;
