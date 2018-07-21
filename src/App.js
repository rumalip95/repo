import React, { Component } from 'react';
import Main from './screens/Main'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Navbar from './components/nav_bar/Navbar'


class App extends Component {
  render() {
    return (
      <div>
        <div style={{paddingTop:40}}>
          <Navbar/>
          <div style={{backgroundColor : "#ffff"}}  className="col-md-8 offset-md-2">
            <Main/>
          </div>        
        </div>
      </div>
    );
  }
}

export default App;
