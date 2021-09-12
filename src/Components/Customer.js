import Header from './Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Products from './Pages/Products';
import SearchProduct from './Pages/SearchProduct';
import LoginPage from './Pages/LoginPage';
import ContractPage from './Pages/ContractPage';
import OrderPage from './Pages/OrderPage';

function App() {
  return (
    <>
        <Header></Header>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/categories' component={Categories}></Route>
          <Route path='/products' component={Products}></Route>
          <Route path='/search' component={SearchProduct}></Route>
          <Route path='/login' component={LoginPage}></Route>
          <Route path='/contract' component={ContractPage}></Route>
          <Route path='/order' component={OrderPage}></Route>
        </Switch>
    </>
  );
}

export default App;
