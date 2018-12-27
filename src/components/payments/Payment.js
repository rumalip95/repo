import React, { Component } from 'react';
import {connect} from "react-redux"

import {withRouter} from "react-router-dom"

import Navbar from '../nav_bar/Navbar'
import Footer from '../footer/Footer'
//import AboutCake from "../aboutCake/AboutCake";


class Payment extends Component {

 

  constructor(props){
    super(props);
    this.state={
      firstName:"",
      lastName:"",
      email:"",
      phoneNo:"",
      address:""
      
    }
  }
  
 paymentHandler=()=>{
    return {
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      phoneNo:this.state.phoneNo,
      address:this.state.address
    }
  }

  sendPaymentData=(data)=>{
     this.props.socket.emit("paymentData",data)
    console.log(this.props.socket)
  }

  

  onChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value,
    })
}

onSubmit=(e)=>{
    e.preventDefault();
    this.sendPaymentData(this.paymentHandler());
}

  
  render() {
    return (
      <div>

        {/*Interface for the buy it now category*/}
        <div>
        <img className="logo" src="./dependencies/pics/newlogo2.png"/>
          <Navbar/>
        </div>
        <div className="row">
          <div className="col-12 offset-0 col-md-6 offset-md-0">
            <img src={this.props.image} alt="" style={{width:"100%",paddingLeft:"255px"}}/>

            
          </div>
      
          <div style={{textAlign:"left",paddingRight:"255px"}} className="col-10 offset-1 col-md-6 offset-md-0">
            <h3>{this.props.title}<span style={{fontSize:"20px"}}>({this.props.weight} lbs)</span></h3>
            <p>LKR {this.props.price}</p>
            <p style={{color:"#666666"}}>{this.props.description}</p>
            <div style={{paddingLeft:"15px",justifyContent:"centre",display:"flex"}}className="row">
              <p style={{paddingTop:"1px",paddingBottom:"10px",height:"10px"}}>Quantity:&nbsp;</p>
              <input style={{width:"50px"}}/>
            </div>
          </div>
        </div>


        
        <div className="container" >

          <div className="row">
              <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
              <form role="form">
                <h2 style={{textAlign:"left"}}> <small>Enter payment details.</small></h2>
                <hr className="colorgraph"/>
                
                
                    <div className="form-group">
                                  <input type="text" onChange={e=>this.onChange(e)} value={this.state.firstName} name="first_name" id="first_name" className="form-control input-lg" placeholder="First Name" tabIndex="1"/>
                    </div>
                
               
                    <div className="form-group">
                      <input type="text" onChange={e=>this.onChange(e)} value={this.state.lastName} name="last_name" id="last_name" className="form-control input-lg" placeholder="Last Name" tabIndex="2"/>
                    </div>
             
                
                <div className="form-group">
                  <input type="text" onChange={e=>this.onChange(e)} value={this.state.address} name="address" id="address" className="form-control input-lg" placeholder="Address" tabIndex="3"/>
                </div>
                <div className="form-group">
                  <input type="email" onChange={e=>this.onChange(e)} value={this.state.email} name="email" id="email" className="form-control input-lg" placeholder="Email Address" tabIndex="4"/>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                      <input type="phoneNO" onChange={e=>this.onChange(e)} value={this.state.phoneNo} name="phoneNO" id="phoneNO" className="form-control input-lg" placeholder="Phone Number" tabIndex="5"/>
                    </div>
                  </div>
                
                </div>
              
                
                <hr className="colorgraph"/>
                <div className="row">
                  <div onClick= {(e)=>{this.onSubmit(e)}}  style={{paddingLeft:250}}><a href="#" className="btn btn-success btn-block btn-lg" >Done</a></div>
                </div>
              </form>
            </div>
          </div>

          
</div>
      <div>
        <Footer/>
      </div> 
        
      </div>
      
    );
  }
}

export default Payment;