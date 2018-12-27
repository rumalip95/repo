import React, { Component } from 'react';
import Payment from '../components/payments/Payment.js'
import {cakeData} from "../components/payments/PaymentData";
import AboutCake from '../components/aboutCake/AboutCake.js'
import {renderPayment} from "../components/payments/RenderPayment"
import Navbar from '../components/nav_bar/Navbar'
import Footer from '../components/footer/Footer'

class Payments extends Component {

  render() {
    return (
      <div>
        <div>
          <img className="logo" src="/dependencies/pics/newlogo2.png"/>
          <Navbar/>
      </div>
        {renderPayment(cakeData)}

        <div>
      <Footer/>
      </div> 
        
        
      </div>
    );
  }
}

export default Payments;