import './App.scss';
import Category from './Components/Category/Category';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Search></Search>
        <Category></Category>
      </Router>
    </div>
  );
}

export default App;
