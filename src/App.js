import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Overall-header">
          <h1>Overall Header</h1>
        </div>
        <div className="Account-page-header">
          <h1>Account Page Header</h1>
        </div>
        <div className="Account-Content">
          <div className="Account-OptionsBar">
            <h1>Account Options Bar</h1>
          </div>
          <div className="Transactions">
            <h1>Upcoming Transactions</h1>
          </div>
          <div className="Transactions">
            <h1>Recent Transactions</h1>
          </div>
        </div>
        <div className="Overall-Footer">
          <h1>Overall Footer</h1>
        </div>
      </div>
    );
  }
}

export default App;
