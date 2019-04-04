import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route } from "react-router-dom"

function App() {
    return (
	<Router basename={'/test-app'}>
  	<div className="App">
      <Route exact path='/text-app'>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
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
        </Route>
        </div>
    </Router>
    );
}

export default App;
