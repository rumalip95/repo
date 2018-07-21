import React, { Component } from 'react';
import Carousal from '../components/carousal/Carousal.js'
import Scroll from '../components/scroll/Scroll.js'

class Main extends Component {
  render() {
    return (
      <div className = "row">
        <div style={{paddingTop : 60}} className="col-md-7 offset-md-1">
          <Carousal/>
        </div>
        <div style={{paddingTop : 60}} className="col-md-4">
        <Scroll/>
        </div>
      </div>
    );
  }
}

export default Main;