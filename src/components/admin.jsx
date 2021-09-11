import React from "react";
import { Link } from "react-router-dom";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <h1>Admin</h1>
        <Link type="button" className="btn btn-primary m-2" to="products/add">Add</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button type="button" className="btn btn-primary btn-sm">
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

// #endregion

export default Admin;
