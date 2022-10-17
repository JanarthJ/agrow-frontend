import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./card.css";

export class Card extends Component {

  constructor(props){
    super(props);
    this.state = {
      product : {}
    }
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({product : this.props.productDetails}, () => {
      console.log(this.state.product);
    })
  }


  render() {
    return (
      this.state.product &&  <div>
        {/* Outer Container */}
        <div className="card-container">
            {/* Inner Container */}
            <div>
                {/* Title */}
                <div className="card-title">
                    {this.state.product.pdname}
                </div>

                {/* Image */}
                <div className='card-image'>
                    <img alt="products" src={this.state.product.pdimage} />
                </div>

                {/* Buttons */}
                <div className='card-button'><Link to={`productdesc/${this.state.product._id}`}>View Product</Link></div>
            </div>
        </div>
      </div>
    )
  }
}

export default Card