import React, { Component } from 'react';
import Carousal from '../components/carousal/Carousal.js'
import Scroll from '../components/scroll/Scroll.js'
import CakeShopsForHomePage from '../components/cakeshops/CakeShopsForHomePage.js'
import Navbar from '../components/nav_bar/Navbar'
import Footer from '../components/footer/Footer'



class Main extends Component {

  


  render() {
    return (
      <div>
        <div>
          <img className="logo" src="./dependencies/pics/newlogo2.png" />
          <Navbar />
        </div>

        <div id="backgroundMiddle"  className="col-md-10 col-12 offset-md-1">
          <div className="row" style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "100%", width: "100%" }}>
            <div style={{ marginLeft: '30px', paddingBottom: '20px', paddingTop:"20px",marginTop: '30px'}} id="carousal" className="homeMid">

              <div  className="row">
                <div className="col-12 col-md-8">
                  <Carousal />
                </div>
                <div  className="col-12 col-md-3">
                  <Scroll />
                </div>
              </div>
            </div>


            <div className="container-fluid col-12">
              <CakeShopsForHomePage />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>

    );
  }
}


export default Main;