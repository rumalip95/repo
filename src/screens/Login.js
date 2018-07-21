import React, { Component } from 'react';
import Form from '../components/loginform/Form.js'

class Login extends Component {
  render() {
    return (
      <div style={{paddingTop : 60}} className="col-md-8 offset-md-2">
        <Form/>
      </div>
    );
  }
}

export default Login;