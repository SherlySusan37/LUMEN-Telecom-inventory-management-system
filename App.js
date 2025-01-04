import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/add-product">Add Product</Link> | <Link to="/products">View Products</Link>
      </nav>
      <Switch>
        <Route path="/add-product" component={ProductForm} />
        <Route path="/products" component={ProductList} />
      </Switch>
    </Router>
  );
}

export default App;
