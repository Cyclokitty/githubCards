import React, { Component } from 'react';
import Form from './Form';
import CardList from './CardList';
import data from './data';
import './App.css';

class App extends Component {
  state = {
    cards: data
  };
  
  render() {
    return (
      <div className="App">
        <h1>Github Cards</h1>
        <h2>Fun for all the Nerds!</h2>
        <Form />
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
