

import './App.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';


import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
  
} from "react-router-dom";

function App() {
  const user=true;
  return (
    <>
    <Router>
     <Switch>
     <Route exact path="/login">
      <Login/>
      </Route>
    <Route exact path="/register">
      <Register/>
    </Route>
    <Route exact path="/">
     { user ? <Home /> : <Redirect to="/login"/> } 
    </Route>
    <Route path="/watch">
    { user ? <Watch /> : <Login/>} 
    </Route>
    <Route path="/movies">
    { user ? < Home type="movies"/> : <Redirect to="/login"/>} 
      </Route>   
      <Route path="/series">
      { user ? < Home type="series"/> : <Redirect to="/login"/>} 
      </Route>   
       </Switch>
    </Router>
    </>
  );
}

export default App;
