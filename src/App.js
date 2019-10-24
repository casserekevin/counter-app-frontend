import React, { Component } from 'react';
import './App.css';
import CounterPage from './pages/CounterPage';

class App extends Component {
  render(){
    return (
      <div className="App">
        <CounterPage/>
      </div>
    );
  }
}

export default App;
