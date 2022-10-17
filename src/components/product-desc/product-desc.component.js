import React, { Component } from 'react'
import "../product-desc/product-desc.css";

export class ProductDesc extends Component {

  constructor(props){
    super(props);
    this.state = {
      user : {
        id: "61d5b954c2bb12e98b319b14",
        name : "Kishore"
      },
      product : ""
    }
  }

  componentDidMount() {
    console.log(window.location.href.split("/")[4]);
    const productID = window.location.href.split("/")[4];
    this.getProductDetails(productID);
  }

  getProductDetails(id) {
    fetch('http://localhost:8080/api/products/getProduct', {
      method:"POST",
      body: JSON.stringify({
        id: id
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    }).then((response) => response.json()).then((data) => {
      this.setState({product: data.data[0]}, () => {
        console.log(this.state.product);
      });
    }).catch((error) => {
      console.log(error);
    })
  }

  OrderNow() {

    var data = {};
    data.placedBy = this.state.user.id;
    data.products = this.state.product;
    data.totalPrice = this.state.product.pdprice;

    fetch('http://localhost:8080/api/orders/createOrder',{
      method: "POST",
      body: JSON.stringify({
        placedBy : this.state.user.id,
        products : [this.state.product],
        totalPrice : this.state.product.pdprice
      })
    }).then((response) => response.json()).then((orders) => {
      console.log(orders);
      alert("Order Placed");
    }).catch((error) => console.log(error))
  }


  render() {
    return (
      this.state.product && <div className="productdesc">
        {/* Title */}
        <div className='productdesc-title'>
            <h1>Product Information</h1>
        </div>

        {/* Product Commercial */}
        <div className='productdesc-product'>
            <div className='productdesc-product-banner'>
                <img alt="product" src={this.state.product.pdimage} />
            </div>

            <div>
                {/* Product Information */}
                <p>{this.state.product.pdname}</p>
                <p>Area : {this.state.product.pdarea}</p>
                <p>Price : {this.state.product.pdprice}</p>
                <p>{this.state.product.pddesc}</p>
                <p>Quantity : {this.state.product.pdqty}</p>
                <button onClick={() => this.OrderNow()}>Order Now</button>
            </div>
        </div>
        
        {/* Product Description */}

        <div>

        </div>
      </div>
    )
  }
}

export default ProductDesc