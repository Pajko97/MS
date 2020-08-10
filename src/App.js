import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import history from './history'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import Home from './Components/Home'
import Payment from './Components/Payment'
import Products from './Components/Products'
import ProductInsert from './Components/ProductInsert'
import ProductPage from './Components/ProductPage'
import Contact from './Components/Contact'
import Product from './Components/Product'
import Info from './Components/Info'
import { Provider } from 'react-redux';
import store from './store'
import Galery from './Components/Galery'
class App extends React.Component {

  constructor(props) {
    super(props);

  }
  componentDidMount() {

  }





  render() {

    return (

      <div>
        <Provider store={store}>
          <BrowserRouter history={history}>
            <Route component={Navbar} />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/naruci" component={Info} />
            <Route exact path="/galerija" component={Galery} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/manager/proizvodi" component={ProductInsert} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/products/:product_id" component={ProductPage} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}


export default App