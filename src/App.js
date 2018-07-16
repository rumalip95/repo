import React, { Component } from 'react';
import Main from './screens/Main'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Navbar from './components/nav_bar/Navbar'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <SignUp/>
        
      </div>
    );
  }
}

export default App;
