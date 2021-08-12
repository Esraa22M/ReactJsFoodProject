import React, { Component } from 'react';

class Product extends Component {
    constructor(props){
        super(props);
        //map props to state {avoid this to have single source of truth}
        this.state={

        };

    }
    componentWillUnmount=()=>{
        console.log("Product component willUnMount")
    }
    componentDidMount=()=>{
        //call Backend
    }
    componentDidUpdate =()=>{
        console.log("Product component did update")
    }
    render() { 
        // const {id, name , count } = this.state;
        return ( 
        


             <div>
                {/* querly braces express about js expression  */}
                {/* <img src={imgUrl}/> */}
                  <h1> {this.props.Prduct.id}</h1>
                 <span >
                {this.props.Prduct.name}</span>
                <span className={this.props.Prduct.count=== 0 ? " badge  bg-warning m-2 ":" badge  bg-primary m-2 "}>
                    {this.props.Prduct.count}</span>

                {/* <button className="btn btn-primary btn-sm m-2">+</button> */}
                {/* <button type="button" className="btn btn-primary btn-sm m-2" onClick={this.handleClick.bind(this , null)} >+</button> */}
                <button type="button" className="btn btn-primary btn-sm m-2" onClick={()=>this.props.onIncrement(this.props.Prduct)} >+</button>
               <button type="button" className="btn btn-danger btn-sm" onClick={()=>this.props.onDelete(this.props.Prduct)}>
                <i className="fas fa-trash"></i>
                </button>



            </div>
         



        );
    }
}
 
export default Product;