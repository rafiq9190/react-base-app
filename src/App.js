import React from 'react';
import Home from './components/home'

import './App.css';

 function App(props) {
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>we are learn now things </h2>
      <Home/>
      <h2>{props.fName}</h2>
        <h3>{props.lName}</h3>
       
      
    </div>
  );
}

export default App;
