import React from "react";
import Input from "./input";
import axios from 'axios';
class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    //id is needed in case of edit just only id is provided by backend
    this.state = {
      errors: {},
      product: {
        id: 0,
        name: "",
        price: 0,
        typeId: 0,
      },
    };
  }
  handleSubmit= async e=>{
    e.preventDefault();
    //make object ready to be posted
    const product ={...this.state.product}
    /*وانت بتعمل add
    ال سيرفر هو الي بيحط ال 
    id
    انت هتحتاج تشيل ال
    id*/
    delete product.id //كده ال product without id
    //call backend
    // fetch('http://localhost:3000/products' , {
    //   method:"POST",
    //   headers:{
    //     "content-type":"application/json"
    //   },
    //   body:JSON.stringify(product)
    // }).then(result=> result.json()).then(data=>console.log(data))

  const {data}  = await axios.post('http://localhost:3000/products', product)
  //steps
  /**
   * call backend
   * update state
   * 
   */
    this.props.onAdd(data);
    /*redirect to admin */
    this.props.history.replace('/admin');
  }
  handleChange = ({ target }) => {
    //clone
    const product = { ...this.state.product };
    //edit
    product[target.name] = target.value;
    this.setState({ product });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Add</h1>
      <form onSubmit={this.handleSubmit}>
        <Input
          name="name"
          label="Name"
          value={this.state.product.name}
          error={this.state.errors.name}
          onChange={this.handleChange}
        />
        <Input
          name="price"
          label="Price"
          value={this.state.product.price}
          error={this.state.errors.price}
          onChange={this.handleChange}
        />
        <div className="form-group">
          <label htmlFor="">Type</label>
          <select
            id="typeId"
            name="typeId"
            className="form-control"
            value={this.state.product.typeId}
            onChange={this.handleChange}
          >
            {this.props.types.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary my-2">Add</button>
      </form>
      </React.Fragment>
    );
  }
}

// #endregion

export default ProductForm;
