import React, { Component } from 'react';
import SignUpForm from '../components/signupform/SignUpForm.js'



class SignUp extends Component {
  
  render() {
    return (
      <div className="align-self-center">
        <SignUpForm  socket={this.props.socket}/> 
      </div>
    );
  }
}

export default SignUp;