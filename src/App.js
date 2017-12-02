import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Overall-header">
          <h1>Overall Header</h1>
        </div>
        <div className="Account-Page-Header">
          <p>Account Name</p>
          <p>360 Money Market ...1234</p>
          <p>View Details</p>
          <p>AVAILABLE BALANCE $123,567.89</p>
          <div className="Transfer-Money-Button">Transfer Money</div>
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
