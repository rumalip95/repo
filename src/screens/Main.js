import React, { Component } from 'react';
import Carousal from '../components/carousal/Carousal.js'

class Main extends Component {
  render() {
    return (
      <div style={{paddingTop : 60}} className="col-md-8 offset-md-1">
        <Carousal/>
      </div>
    );
  }
}

export default Main;