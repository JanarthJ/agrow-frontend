import React, { Component } from 'react'
import "../product-desc/product-desc.css";

export class ProductDesc extends Component {
  render() {
    return (
      <div className="productdesc">
        {/* Title */}
        <div className='productdesc-title'>
            <h1>Product Information</h1>
        </div>

        {/* Product Commercial */}
        <div className='productdesc-product'>
            <div className='productdesc-product-banner'>
                <img alt="product" src="https://cdn.shopify.com/s/files/1/0722/2059/products/GREEN-MAGIC-BROCCOLI_280x.jpg?v=1568889205" />
            </div>

            <div>
                {/* Product Information */}
                <p>Product 1</p>
                <p>Brand : Sakata</p>
                <p>Price : 500</p>
                <p>product details</p>

                <button>Add to cart</button>
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