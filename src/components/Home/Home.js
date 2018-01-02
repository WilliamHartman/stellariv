import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className='title-container'>
          <div className="title-top">
            <h1 className="title-stellar">Stellar</h1>
            <h5 className="title-iv">Invention Ventures</h5>
          </div>
          <div className="title-motto-container">
            <h1 className='title-motto' >Licensing Exceptional Products to Market Leaders</h1>          
          </div>
        </div>
      </div>
    );
  }
}

export default Home;