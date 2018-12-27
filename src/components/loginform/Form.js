import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import {loginCustomer}from "../../redux/actions/LoginActions"
import {connect} from "react-redux"

class Login extends Component {

constructor(props){
    super(props)
    this.state={
        email:"",
        password:"",
        err:""
    }
}


onChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value,
    })
}

onSubmit=(e)=>{
    e.preventDefault();
    this.props.socket.emit("Login",{
        email:this.state.email,
        password:this.state.password
    })
}

  render() {
    this.props.socket.on("password matched",(data)=>{
       
        localStorage.setItem('email',this.state.email)
        localStorage.setItem('password',this.state.password)
        this.props.loginCustomer({email:this.state.email, password:this.state.password})
        this.props.history.push("/")
      })
      this.props.socket.on("password not matched",()=>{
        console.log("password not matched")
        this.setState({
            err: "password not matched"
          })
      })
      this.props.socket.on("user not found",()=>{
        console.log("user not found")
        this.setState({
            err: "user not found"
          })
      })
      this.props.socket.on("save successful",()=>{
        console.log("save successful")
      })
      this.props.socket.on("internal error",()=>{
        console.log("internal error")
        this.setState({
            err: "internal error"
          })
      })
    return (
      <div>
         <div className="container">
             <div className="card card-container">
                <div className="form-topic">
                <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'></link>
                <h1>Login</h1>
                </div>
                    <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="alternative txt"/>
                    <p id="profile-name" className="profile-name-card"></p>
                    <form className="form-signin">
                        <span id="reauth-email" className="reauth-email"></span>
                        <input onChange={e=>this.onChange(e)} value={this.state.email} name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                        <input onChange={e=>this.onChange(e)} value={this.state.password} name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                        <div id="remember" className="checkbox">
                            <label>
                                
                            </label>
                        </div>
                        <p style={{color:"red"}}>{this.state.err}</p>
                        <button onClick= {(e)=>{this.onSubmit(e)}} className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
                    </form>
                    {/* <a href="#" className="forgot-password">
                        Forgot your password?
                    </a> */}
             </div>
            </div>
        
      </div>
    );
  }
}

const mapActionsToProps={
    loginCustomer
}

export default withRouter(connect(null,mapActionsToProps)(Login));
