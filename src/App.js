import React from 'react';
import Home from './components/home'

import './App.css';

 function App(props) {
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>we are learn now things </h2>
      <Home>
        {props.fName}
        {props.lName}
      </Home>
    </div>
  );
}

export default App;
