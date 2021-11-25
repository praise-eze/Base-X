import './App.css';
import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Minter from './Minter'
import EnsLogic from './EnsLogic'


function App() {

  return (
    <Router>
      <div className="App">
        <div>Hello and it is working </div>
        <br></br>
       <li> <Link to="/Minter">Minter</Link></li>
       <li> <Link to="/EnsLogic">EnsLogic</Link> </li>
      </div >
      <div>
        <Switch>
          <Route path="/Minter" component={Minter} ></Route>
          <Route path="/EnsLogic" component={EnsLogic}></Route>
        </Switch>
      </div>




    </Router>
  );

}

export default App;
