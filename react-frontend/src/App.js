import React from 'react';
import logo from './logo.svg';
import './App.css';

const BACKEND_ADDRESS = process.env.REACT_APP_BACKEND_ADDRESS;

function App() {

  console.log(process.env)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. ok
            {BACKEND_ADDRESS}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
