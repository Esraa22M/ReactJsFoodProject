import React from "react";
import Navbar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router";

import ShoppingCart from "./components/shopping-cart";

import About from "./components/about";
import ContactUs from "./components/contactUs";
import Home from "./components/home";
import Users from "./components/users";
import NotFound from "./components/notFound";
import Menu from "./components/menu";
class app extends React.Component {
  state = {
    products: [
      { id: 1, name: "Burger", price: 30, count: 0, isInCart: false },
      { id: 2, name: "Fries", price: 20, count: 0, isInCart: false },
      { id: 3, name: "Cola", price: 10, count: 0, isInCart: false },
      { id: 4, name: "Large Burger", price: 40, count: 0, isInCart: false },
      { id: 5, name: "Large Cola", price: 25, count: 0, isInCart: false },
      { id: 6, name: "Large Fries", price: 15, count: 0, isInCart: false },
    ],
    pageSize: 4,
    activePage: 1,
  };
  handleDelete = (product) => {
    //colne state
    //edit state
    //setstate
    const products = this.state.products.filter((p) => p.id !== product.id);
    this.setState({ products });
  };
  handleIncrement = (product) => {
    const products = [...this.state.products];
    //deep cloning
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].count++;
    this.setState({ products });
  };
  handleReset = () => {
    //clone
    //edit
    //setState
    let products = [...this.state.products];
    products = products.map((p) => {
      return { ...p, count: 0 };
    });
    this.setState({ products });
  };
  handleCartChange = (product) => {
    //clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].isInCart = !products[index].isInCart;
    this.setState({ products });

    //edit
    //setState
  };
  handlePageChange =page=> {
    this.setState({activePage:page})
  };
  render() {
    return (
      <React.Fragment>
        <Navbar count={this.state.products.length} />
        <main className="container">
          {/* <ShoppingCart
            products={this.state.products}
           fun ={{
            onIncrement:this.handleIncrement,
            onReset:this.handleReset,
            onDelete:this.handleDelete
           }
           }
          /> */}
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/notfound" component={NotFound} />
            <Route
              path="/menu"
              render={(props) => (
                <Menu
                  {...props}
                  products={this.state.products}
                  onCartChange={this.handleCartChange}
                  pageSize={this.state.pageSize}
                  activePage={this.state.activePage}
                  onPageChange={this.handlePageChange}
                />
              )}
            />

            {/*/:id is a router parameter which is dynamic */}
            <Route path="/user" component={Users} />

            <Route
              path="/cart"
              render={(props) => (
                <ShoppingCart
                  products={this.state.products.filter((prod) => prod.isInCart)}
                  {...props}
                  fun={{
                    onIncrement: this.handleIncrement,
                    onReset: this.handleReset,
                    onDelete: this.handleDelete,
                  }}
                />
              )}
            />

            <Route path="/contactUs" component={ContactUs} />
            <Route path="/home" component={Home} exact />
            <Redirect from="/" to="/home" />
            <Redirect to="/notfound" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

// #endregion

export default app;
