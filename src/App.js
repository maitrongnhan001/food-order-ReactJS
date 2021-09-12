import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customer from './Components/Customer';
function App() {
  return (
      <Router>
        <Switch>
            <Route path='/' exact component={Customer}/>
            <Route path='/admin' component ={()=>(<div>admin</div>)}/>
            {/* <Route path='' component = {()=>(<div>Error</div>)}/> */}
        </Switch>
      </Router>
  );
}

export default App;
