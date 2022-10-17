import React, { Component } from 'react'
import Card from '../common/card.component'
import "./dashboard.css";

export class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state ={
      products : []
    }
  }


  componentWillMount(){
    // const {history} = this.props;

    // const supportHistory = 'pushState' in window.History;

    // if(supportHistory) {
    //   history.pushState(null,'/');
    // }
    // else{
    //   window.location='/dashboard';
    // }

    

    this.getAllProducts();
  }


  getAllProducts() {
    fetch('http://localhost:8080/api/products/getAllProducts', {
      method:"GET",
      skip:0,
      limit:20
    }).then((response) => response.json()).then((data) => {
      this.setState({products: data.data}, () => {
        console.log(this.state.products);
      });
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        {/* Left Area  */}

        <div className="dashboard-left">
          <li>
            <p></p>
            <p><button>Home</button></p>
            <p></p>
          </li>
          <li>
            <p></p>
            <p><button>Sign in</button></p>
            <p></p>
          </li>
          <li>
            <p></p>
            <p><button>Login</button></p>
            <p></p>
          </li>
        </div>
        {/* Top Area */}

        <div className="dashboard-top">
          <h1>Dashboard</h1>
        </div>

        {/* Center Area */}
        <div className="dashboard-card-grid">
          {
            this.state.products.length !==  0 ? this.state.products.map((product,id) => {        
              return(
                <Card productDetails={product} key={id} />
              )
            }) : <div>No Products</div>
          }
        </div>
      </div>
    )
  }
}

export default Dashboard