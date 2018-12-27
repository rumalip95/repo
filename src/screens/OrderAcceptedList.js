import React, { Component } from 'react';
import Navbar from '../components/nav_bar/Navbar'
import Footer from '../components/footer/Footer'



class OrderAcceptedList extends Component {
  
  render() {
    return (
      <div >
         <div>
          <img className="logo" src="/dependencies/pics/newlogo2.png"/>
          <Navbar/>
      </div>
        <div className="row">
        <div style={{paddingTop:15,paddingLeft:350 ,fontFamily: 'Sofia'}}><h4><b>Your Customized Cake Orders</b></h4></div>
        <div style={{paddingTop:15,paddingLeft:310 ,fontFamily: 'Sofia'}}><h4><b>Order Accepted Cake Shop List</b></h4></div>
        
      </div>
      <div>
          <img style={{width:300,height:200}} src="./dependencies/pics/cakeshops1.jpg" alt=""/>
        </div>
      <div>
      <Footer/>
      </div> 
      </div>
    );
  }
}

export default OrderAcceptedList;