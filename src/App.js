import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Player} from './components/players.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Conspire</h1>
        </header>

        < Player />
      </div>
    );
  }
}

export default App;
