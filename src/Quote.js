import React, { Component } from 'react';
import './App.css';

class Quote extends Component {

  render() {
    return (
      <div className='quote'>
        <h3>{this.props.quote}</h3>
      </div>
    );
  }
}

export default Quote;
