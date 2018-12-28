import React, { Component } from 'react';
import Navbar from '../nav_bar/Navbar'
import Footer from '../footer/Footer'
import Link from 'react-router-dom/Link';

class Customized extends Component {
  render() {
    return (
      <div>
      <img className="logo" src="/dependencies/pics/newlogo2.png"/>
          <Navbar/>
      <div  id="backgroundMiddle" style={{backgroundColor:"#ffd4d5"}} className="col-md-10 offset-md-1">
        <div  id="customizing" className="row col-8 offset-1" style={{paddingTop :100}}>
        
      <h3><b>To customize your own cake choose an option below.</b></h3>
      <h5>After you have submitted your order,you  will see a list of cake shops that have accepted to complete your order. You may choose the cake shop you desire.</h5><br/>
      <h5><b>Note that different cake shops may have different costs for the cake order.</b></h5>
        
        <div className="col-4 offset-1">
        <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet"></link>
          <div className="card" style={{width: 250}}>
              <img className="card-img-top" src="../dependencies/pics/build.png" alt="Card image cap"/>
              <div className="card-body">
                  <h5 className="card-title">To build your own cake</h5>
                  
                  <Link style={{color:"#252525"}} to="/Customizing/CreateCake">
                    <a  className="btn btn-primary">Click here</a>
                  </Link>
              </div>
          </div>
        </div>
        <div className="col-4 offset-3">
          <div className="card" style={{width: 250}}>
              <img className="card-img-top" src="../dependencies/pics/drawing.jpg" alt="Card image cap"/>
              <div className="card-body">
                  <h5 className="card-title">To upload an image</h5>
                  
                  <Link style={{color:"#252525"}} to="/Customizing/Uploading">
                    <a  className="btn btn-primary">Click here</a>
                  </Link>
              </div>
          </div>
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

export default Customized;