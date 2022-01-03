import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state)=> state.user.currentUser)
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            {user? <Redirect to='/'/> : <Login />}
          </Route>
          <Route path="/register">
          {user? <Redirect to='/'/> : <Register />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
