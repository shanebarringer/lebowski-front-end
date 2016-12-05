import React, { Component } from 'react';
import './App.css';

class Image extends Component {

  render() {
    return (
      <div className='image-container'>
        <img src={this.props.self}/>
      </div>
    );
  }
}

export default Image;
