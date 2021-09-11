import './App.scss';
import Category from './Components/Category/Category';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import { BrowserRouter as Router } from "react-router-dom";
import Product from './Components/Product/Product';
import Social from './Components/Social/Social';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Search></Search>
        <Category></Category>
        <Product></Product>
        <Social></Social>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
