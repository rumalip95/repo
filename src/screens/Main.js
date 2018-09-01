import React, { Component } from 'react';
import Carousal from '../components/carousal/Carousal.js'
import Scroll from '../components/scroll/Scroll.js'
import CakeShops from '../components/cakeshops/CakeShops.js'
import Navbar from '../components/nav_bar/Navbar'
import Footer from '../components/footer/Footer'

class Main extends Component {
  render() {
    return (
      <div>
      <div>
      <img className="logo" src="./dependencies/pics/newlogo2.png"/>
          <Navbar/>
      </div>
      
      <div  id="backgroundMiddle" style={{backgroundColor:"#ffd4d5"}} className="col-md-10 col-12 offset-md-1">
      <div className = "row">
        <div id="carousal">
        
            <div style={{paddingTop : 60,paddingLeft:55}} className="mid card col-12 cardStyles col-md-10 offset-md-1">
              <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet"></link>
              <h1><b>Welcome to Cakez</b></h1>
              <div className="para">
              <link href="https://fonts.googleapis.com/css?family=Concert+One" rel="stylesheet"/>
                <h5>The place where you can find the best-selling cakes from the best-selling cake shops.</h5>
                <h5>We help you find your dream cake or lets you get it made from your favourite cake shop.</h5>
              </div>
                <Carousal/>
            </div>
          </div>
          
        {/*<div style={{paddingTop : 60}} className="col-md-4">
          <Scroll/>
       </div>*/}
        <div className="container-fluid col-12">
          <CakeShops/>
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

export default Main;