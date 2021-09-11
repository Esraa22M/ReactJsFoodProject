import React from "react";

const Filter = (props) => {
  return (
    <React.Fragment>
      <ul className="list-group">
        {props.types.map((type) => (
          <li
          key ={type.id}
          Style="cursor:pointer"
            className={
              "list-group-item "+ (type.id === props.activeFilter ? ("active") : "")
            }
            onClick={()=>props.onFilterChange(type)}
          >
              {type.name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

// #endregion

export default Filter;
