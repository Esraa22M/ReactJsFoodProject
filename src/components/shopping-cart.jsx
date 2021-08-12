// import React, { Component } from 'react';
// import Product from './product';
// const ShoppingCart=({products , fun:{onDelete ,onIncrement , onReset }})=>{
//     return(
//         <React.Fragment>
//         <h1>Shopping Cart</h1>
//         {products.map(
//             product=><Product key={product.id} Prduct={product}  onDelete={onDelete}
//             onIncrement={onIncrement} 
//             >
//                  <h4>{product.id}</h4>
//                 </Product>
//         )}
//         <button className="btn btn-secondary m-2" onClick={onReset}>Reset</button>

//     </React.Fragment>
 
//     );
// }
import React from 'react';
 import Product from './product';

class ShoppingCart extends React.Component {
constructor(props) {
    super(props);
     console.log("constructor fire first");
    this.state = {
    };
}
componentDidMount=()=>{
    console.log("component did mounting here")
}

//fire after each update after render function
componentDidUpdate =(prevState , prevProps)=>{
    //you can compare and call backend
    console.log("component did updated here give you access to prev state , prev props")
}
    render() {
       const  {products , fun:{onDelete ,onIncrement , onReset }} = this.props;
       console.log("render fire second")
        return(
                    <React.Fragment>
                    <h1>Shopping Cart</h1>
                    {products.map(
                        product=><Product key={product.id} Prduct={product}  onDelete={onDelete}
                        onIncrement={onIncrement} 
                        >
                             <h4>{product.id}</h4>
                            </Product>
                    )}
                    <button className="btn btn-secondary m-2" onClick={onReset}>Reset</button>
            
                </React.Fragment>
             
                );
    }
}

// #endregion

export default ShoppingCart;

 
// export default ShoppingCart;