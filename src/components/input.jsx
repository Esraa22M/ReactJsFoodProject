import React from "react";

const Input = (props) => {
  const {name , label , value , error , onChange}=props;
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="userName">{label}</label>
        <input
          /*{ref={this.username} } */ type="text"
          className="form-control"
          id={name}
          name={name}
          autoFocus
          value={value}
          onChange={onChange}
        />
        {error&& (
          <div className="alert alert-danger">{error}</div>
        )}
      </div>
    </React.Fragment>
  );
};

// #endregion

export default Input;
