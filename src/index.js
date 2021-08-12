import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; //component which inject the history of browser in your app
// import Product from './components/product';
// import ShoppingCart from './components/shopping-cart';
import App from "./app";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
/*const el = (<div>
  <div>Ahmed</div>
  <div>developer</div>
</div>);
*/
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
class Person {
  foo() {
    console.log(this);
  }
}
const p = new Person();
const pp = p.foo;
pp();
