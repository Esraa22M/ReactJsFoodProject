import React from "react";
import Cart from "./cart";
import Pagination from "./pagination";
import _ from "lodash";
import Filter from "./filter";
class Menu extends React.Component {
  render() {
    //Pagination logic
    //start index

    const startIndex = (this.props.activePage - 1) * this.props.pageSize;
    const endIndex = startIndex + this.props.pageSize;
    //showed products
    let filteredProducts = this.props.products;
    if(this.props.activeFilter)
      filteredProducts = this.props.products.filter(product=>product.typeId === this.props.activeFilter)
    console.log(filteredProducts)
    const showedProducts = filteredProducts.slice(startIndex, endIndex);

    return (
      <React.Fragment>
        <h1>Menu</h1>
        <div className="row">
          <div className="col-3">
            <Filter
              types={this.props.types}
              activeFilter={this.props.activeFilter}
              onFilterChange={this.props.onFilterChange}
            />
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
           {(filteredProducts.length > this.props.pageSize) &&<Pagination
              pageCount={this.props.products.length / this.props.pageSize}
              activePage={this.props.activePage}
              onPageChange={this.props.onPageChange}
            />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// #endregion

export default Menu;
