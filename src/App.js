import './App.scss';
import Category from './Components/Category/Category';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Category></Category>
    </div>
  );
}

export default App;
