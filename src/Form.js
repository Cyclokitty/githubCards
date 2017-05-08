import React, { Component } from 'react';
import './Form.css';

class Form extends Component{
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: Form Submit');
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Github Username' />
        <button type='submit'>Add Card</button>
      </form>
    )
  }
}

export default Form;
