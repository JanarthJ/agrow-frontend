// import logo from './logo.svg';
import './App.css';
import Home from "./home/home.js";
import AddProduct from "./product/productAdd";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Dashboard from './components/dashboard/dashboard';
import ProductDesc from './components/product-desc/product-desc.component';
import { Component } from 'react';


class App extends Component {

  render (){
  const supportHistory = 'pushState' in window.History;
    return(
      <Router forceRefresh={!supportHistory}>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav> */}

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            {/* <Route path="/about">
              <About />
            </Route> */}
            <Switch>  
              <Route exact path="/productdesc/:id">
                <ProductDesc />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/addproduct">
                <AddProduct />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
