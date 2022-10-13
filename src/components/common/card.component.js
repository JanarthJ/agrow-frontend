import React, { Component } from 'react'
import "./card.css";

export class Card extends Component {
  render() {
    return (
      <div>
        {/* Outer Container */}
        <div className="card-container">
            {/* Inner Container */}
            <div>
                {/* Title */}
                <div className="card-title">
                    Product 1
                </div>

                {/* Image */}
                <div className='card-image'>
                    <img alt="products" src="https://cdn.shopify.com/s/files/1/0722/2059/products/GREEN-MAGIC-BROCCOLI_280x.jpg?v=1568889205" />
                </div>

                {/* Buttons */}
                <div className='card-button'><button href="/productdesc">View Product</button></div>
            </div>
        </div>
      </div>
    )
  }
}

export default Card