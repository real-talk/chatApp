import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatsListScreen from './components/ChatsListScreen'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatsListScreen />
      </div>
    );
  }
}

export default App;
