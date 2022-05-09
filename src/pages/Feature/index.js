import Products from "./ProductList";
import ProductDetail from "./ProductDetail";
import Home from "./Home";
import Login from './Login';
import Account from '../Account';
import { Switch, Route} from 'react-router-dom'

const Features = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product/:id">
          <ProductDetail />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        {
          user ? 
          <Route path='/account'>
            <Account/>
          </Route> :
          <Route path='/login'>
            <Login/>
          </Route>
        }
      </Switch>
    </>
  )
}

export default Features;
