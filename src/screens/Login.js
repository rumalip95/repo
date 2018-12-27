import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import Form from '../components/loginform/Form.js'

class Login extends Component {
  render() {
   
    return (
      <div style={{paddingTop : 60}} className="col-md-8 offset-md-2">
        <Form socket={this.props.socket}/>
      </div>
    );
  }
}

export default withRouter(Login);