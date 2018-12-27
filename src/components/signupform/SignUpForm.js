import React, { Component } from 'react';
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import DropZone from "react-dropzone";
import { renderUploadImage } from '../../image_compressor/ImageCompressor';
import SignupCakeUpload from '../uploadcake/SignupCakeUpload'
//import {browserHistory}from 'react-router-dom'



class SignUp extends Component {

  descriptionStyles = {
    warning: {
      color: "#e8232d"
    },
    normal: {
      color: "#7a7a7a"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      phoneNo: "",
      address: "",
      confirmPassword: "",
      companyName: "",
      image: "",
      companyLocation: "",
      description: "",
      tAndC: false,
      err: "",
      provider: false
    };



  }

  componentDidMount() {
    this.props.socket.on("Uploaded Service Provider Logo Saved", () => {
      window.location.reload()
    })

    this.props.socket.on("Uploaded Service Provider Logo Failed", () => {
      this.setState({ error: "Error" })
    })


  }

  onChangeCheckbox = (e) => {
    this.setState({
      provider: !this.state.provider
    })
  }



  signUpHandler = () => {


    return {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      phoneNo: this.state.phoneNo,
      address: this.state.address,
      companyLocation: this.state.companyLocation,
      companyName: this.state.companyName,
      image: this.state.image,
      provider: this.state.provider,
      description: this.state.description


    }
  }

  sendSignUpData = (data) => {
    this.props.socket.emit("loginData", data)
    console.log(this.props.socket)
  }

  getImageString = (imageString) => {
    this.setState({
      image: imageString
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {

    e.preventDefault();
    this.sendSignUpData(this.signUpHandler());
    this.setState({ error: "" })
    if (this.state.image !== "") {
      this.props.socket.emit("Uploading Image", { image: this.state.image });
    }
    else {
      this.setState({ error: "Please Upload An Image" })
    }
  }

  renderCompanyData = () => {
    if (this.state.provider) {
      return (
        <div className="row" style={{paddingTop:20}}>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <div className="form-group">
              <input name="companyName" onChange={e => this.onChange(e)} value={this.state.companyName} type="text" id="company_name" className="form-control input-lg" placeholder="Company Name" tabindex="2" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <div className="form-group">
              <input name="companyLocation" onChange={e => this.onChange(e)} value={this.state.companyLocation} type="text" id="company_loction" className="form-control input-lg" placeholder="Company Location" tabindex="2" />
            </div>
          </div>
          <div className="form-group">
            <textarea rows="3" name="description" onChange={e => this.onChange(e)} value={this.state.description} type="text" id="display_name" className="form-control input-lg" placeholder="Enter Company Description" tabindex="3" />
          </div>
          <div style={{ marginTop: "20px", paddingBottom: "20px" }} className="col-12 col-md-5"  >
            <SignupCakeUpload getImageString={(imageString) => this.getImageString(imageString)} />
          </div>

        </div>
      )
    }
    else {
      return null;
    }

  }

  render() {
    this.props.socket.on("user already exists", () => {
      console.log("user already exists")
      this.setState({
        err: "Username or Email Already Exists"
      })
    })
    this.props.socket.on("save successful", () => {
      console.log("save successful")
      this.props.history.push('/Login')
    })
    this.props.socket.on("internal error", () => {
      console.log("internal error")
      this.setState({
        err: "Internal Error"
      })
    })
    return (
      <div className="offset-sm-2 offset-md-4 row">

        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
              <form role="form">
                <h2>Please Sign Up <small>It's free and always will be.</small></h2>
                <hr className="colorgraph" />
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                      <input type="text" onChange={e => this.onChange(e)} value={this.state.firstName} name="firstName" id="first_name" className="form-control input-lg" placeholder="First Name" tabindex="1" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                      <input name="lastName" onChange={e => this.onChange(e)} value={this.state.lastName} type="text" id="last_name" className="form-control input-lg" placeholder="Last Name" tabindex="2" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input name="phoneNo" onChange={e => this.onChange(e)} value={this.state.phoneNo} type="text" id="display_name" className="form-control input-lg" placeholder="Phone NO" tabindex="3" />
                </div>
                <div className="form-group">
                  <textarea rows="3" name="address" onChange={e => this.onChange(e)} value={this.state.address} type="text" id="display_name" className="form-control input-lg" placeholder="Address" tabindex="3" />
                </div>
                <div className="form-group">
                  <input name="userName" onChange={e => this.onChange(e)} value={this.state.userName} type="text" id="display_name" className="form-control input-lg" placeholder="Username" tabindex="3" />
                </div>
                <div className="form-group">
                  <input name='email' onChange={e => this.onChange(e)} value={this.state.email} type="email" id="email" className="form-control input-lg" placeholder="Email Address" tabindex="4" />
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                      <input name='password' onChange={e => this.onChange(e)} value={this.state.password} type="password" id="password" className="form-control input-lg" placeholder="Password" tabindex="5" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                      <input name='confirmPassword' onChange={e => this.onChange(e)} value={this.state.confirmPassword} type="password" id="password_confirmation" className="form-control input-lg" placeholder="Confirm Password" tabindex="6" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-4 col-sm-3 col-md-3">
                    <span className="button-checkbox">
                      <button type="button" className="btn" data-color="info" tabindex="7"><input type="checkbox" onChange={e => this.onChange(e)} value={this.state.tAndC} name="tAndC" id="t_and_c" className="hidden" value="1" /> I Agree </button>

                    </span>
                  </div>
                  <div className="col-xs-8 col-sm-9 col-md-9">
                    By clicking <strong className="label label-primary">Sign In</strong>, you agree to the <a href="#" data-toggle="modal" data-target="#t_and_c_m">Terms and Conditions</a> set out by this site, including our Cookie Use.
                </div>
                </div>

                <hr className="colorgraph" />

                {/* <div className="col-xs-4 col-sm-3 col-md-3"> */}
                    {/* <span className="button-checkbox"> */}
                      <button type="button"  className="btn" data-color="info" tabindex="7"><input type="checkbox" onChange={e => this.onChangeCheckbox(e)} checked={this.state.provider} name="isTopping"  className="hidden"  /> I am a service provider(Please put a tick here only if you are a service provider)</button>

                    {/* </span> */}
                  {/* </div> */}

                {/* <div className="row">
                  <input type="checkbox"  onChange={e => this.onChangeCheckbox(e)} name="isTopping" checked={this.state.provider} />
                  <p>I am a service provider(Please put a tick here only if you are a service provider)</p>
                  
                </div> */}
                
                <div>
                  {this.renderCompanyData()}
                  <p style={{ color: "red" }}>{
                    this.state.err
                  }</p>
                </div>
                <div className="row">
                  <div onClick={(e) => { this.onSubmit(e) }} className="col-xs-12 col-md-6"><input style={{ textAlign: "centre", paddingBottom: "40px", marginLeft: "125px" }} type="submit" value="Sign In" className="btn btn-primary btn-block btn-lg" tabindex="7" /></div>
                  {/* <div className="col-xs-12 col-md-6"><a href="#" className="btn btn-success btn-block btn-lg">Sign In</a></div> */}
                </div>

              </form>
            </div>
          </div>

          <div className="modal fade" id="t_and_c_m" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 className="modal-title" id="myModalLabel">Terms & Conditions</h4>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal">I Agree</button>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}
const mapStateToProps = (state) => {

  return {
    socket1: state.socket
  }
}

export default withRouter(connect(mapStateToProps, null)(SignUp)); 