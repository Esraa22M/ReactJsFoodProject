import React from 'react';

//Interface
//input  ==>isInCart
//, output
const Cart = (props) => {
    const styles = props.product.isInCart ?{cursor:"pointer"}:{color:"#80808080", cursor:"pointer"}
    return <i onClick={()=>props.onCartChange(props.product)} style={styles} className="fas fa-cart-plus" ></i>;
}


// #endregion

export default Cart;