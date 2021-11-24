import './App.css';
import React from 'react';
import Link from 'react-router-dom'
//import Minter from './Minter'
//import EnsLogic from './EnsLogic'

function App() {
  return (
    <div className="App">
      <div>Hello and it is working </div>
      <br></br>
      <Link to='./Minter'>Minter</Link>
    </div >
  );
}

export default App;
