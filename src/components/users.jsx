import React from "react";
import queryString from 'query-string';
class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleClick = e=>{
    //call backend 
    this.props.history.push('/cart');
  }

  render() {
   const result = queryString.parse(this.props.location.search);
   console.log(result);
    return (
      <React.Fragment>
        <h1>Edit User {this.props.match.params.id}</h1>
        <button onClick={this.handleClick} className="btn btn-secondary">Save</button>
      </React.Fragment>
    );
  }
}

export default Users;
