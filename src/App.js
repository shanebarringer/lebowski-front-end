import React, { Component } from 'react';
import Quote from './Quote';
import Image from './Image';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      quote: '',
      image: '',
      background: '#FFFFFF'
    }
  }

  getQuote = (e, character) => {
    e.preventDefault()

    fetch(`http://lebowski.me/api/lines/random?character=${character}`, {
      mode: 'cors',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'text/plain, application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => this.setState({
      quote: data.results.text,
      image: require(`./images/${character}.jpg`),
      background: '#EB8834'
    })
    )
  }

  render() {
    return (
    <div className='app' style={{backgroundColor: this.state.background}}>
      <div className='top-container'>
          { this.state.image ? <Image self={this.state.image}/> : ''}
          <div className='btn-container'>
            <h3> Choose Character</h3>
            <button onClick={(e) => this.getQuote(e, 'The+Dude')}>The Dude</button>
            <button onClick={(e) => this.getQuote(e, 'Walter')}>Walter</button>
            <button onClick={(e) => this.getQuote(e, 'Donny')}>Donny</button>
            <button onClick={(e) => this.getQuote(e, 'The+Jesus')}>The Jesus</button>
            <button onClick={(e) => this.getQuote(e, 'The+Stranger')}>The Stranger</button>
          </div>
        </div>
        { this.state.quote ? <Quote quote={this.state.quote}/> : '' }

      </div>

    );
  }
}

export default App;
