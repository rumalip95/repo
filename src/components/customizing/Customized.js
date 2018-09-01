import React, { Component } from 'react';
import Navbar from '../nav_bar/Navbar'
import Footer from '../footer/Footer'


class Customized extends Component {
  render() {
    return (
      <div>
      <img className="logo" src="./dependencies/pics/newlogo2.png"/>
          <Navbar/>
      <div  id="backgroundMiddle" style={{backgroundColor:"#ffd4d5"}} className="col-md-8 offset-md-2">
        <div  id="customizing" className="row col-8 offset-1" style={{paddingTop :100}}>
        
      <h4><b>To create your own cake follow the steps shown below.</b></h4>
        <h5>1)Upload an image of an existing cake or upload a drawn design of your dream cake.<br/></h5>
        <h5>2)After the cake providers accept your order you can choose which cake shop you want to give your order to.<br/></h5>
        <h5>3)The cake shops will suggest a date to complete your order and they will also suggest the price for your order.</h5>

        <div className="col-4 offset-1">
        <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet"></link>
          <div className="card" style={{width: 250}}>
              <img className="card-img-top" src="../dependencies/pics/birthday.jpg" alt="Card image cap"/>
              <div className="card-body">
                  <h5 className="card-title">To build your own cake</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Click here</a>
              </div>
          </div>
        </div>
        <div className="col-4 offset-3">
          <div className="card" style={{width: 250}}>
              <img className="card-img-top" src="../dependencies/pics/birthday.jpg" alt="Card image cap"/>
              <div className="card-body">
                  <h5 className="card-title">To upload an image</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Click here</a>
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