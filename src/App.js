// import logo from './logo.svg';
import './App.css';
import Home from "./home/home.js";
import AddProduct from "./product/productAdd";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Dashboard from './components/dashboard/dashboard';
import ProductDesc from './components/product-desc/product-desc.component';


function App() {
  return (
    <Router>
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
        <BrowserRouter>
          {/* <Route path="/about">
            <About />
          </Route> */}
          
          <Route exact path="/productdesc">
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
        </BrowserRouter>
      </div>
    </Router>
  );
}

export default App;
