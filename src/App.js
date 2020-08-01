import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  render() {
    const { query } = this.state

	//This was for having an alternative text shown when the query is an empty string

    //const echoingInput = query !== ''
    //? <span>{query}</span>
    // : <p>This should mirror the text you typed into the input field.</p>

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input className="echo-input"
            type='text'
            placeholder='Say Something'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}/>
          <p className="echo">Echo:</p>


          //<div className='echoing-input'>
          //"{echoingInput}"
          // </div>
          {query !== '' && (
          <div className='echoing-input'>
            <span>{query}</span>
          </div>
        )}
        </div>
      </div>
    );
  }
}

export default App;
