import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import router from './router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="navbar-container">
          {router}        
        </div>
      </div>
    );
  }
}

export default App;