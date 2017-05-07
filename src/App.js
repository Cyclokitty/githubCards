import React, { Component } from 'react';
import CardList from './CardList';
import data from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Github Cards</h1>
        <h2>Fun for all the Nerds!</h2>
        <CardList cards={data}/>
      </div>
    );
  }
}

export default App;
