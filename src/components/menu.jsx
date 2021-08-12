import React from "react";
import Cart from "./cart";
import Pagination from "./pagination";
import _ from "lodash";
class Menu extends React.Component {
  render() {
    //Pagination logic
    //start index

    const startIndex = (this.props.activePage - 1) * this.props.pageSize;
    const endIndex = startIndex + this.props.pageSize;
    //showed products
    const showedProducts = this.props.products.slice(startIndex, endIndex);
    return (
      <React.Fragment>
        <h1>Menu</h1>
        <div className="row">
          <div className="col-3">
            <ul className="list-group">
              <li class="list-group-item active" aria-current="true">
                An active item
              </li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
          </div>
          <div className="col">
            {" "}
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {showedProducts.map((prod) => (
                  <tr key={prod.id}>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td>
                      <Cart
                        product={prod}
                        onCartChange={this.props.onCartChange}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              pageCount={this.props.products.length / this.props.pageSize}
              activePage={this.props.activePage}
              onPageChange={this.props.onPageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// #endregion

export default Menu;
