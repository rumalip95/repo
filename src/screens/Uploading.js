import React, { Component } from 'react';
import UploadCake from '../components/uploadcake/UploadCake.js'
import Navbar from '../components/nav_bar/Navbar'
import Footer from '../components/footer/Footer'

class Uploading extends Component {
  render() {
    return (
      <div>
        <div>
          <img className="logo" src="./dependencies/pics/newlogo2.png"/>
          <Navbar/>
      </div>
        <div id="backgroundMiddle" style={{backgroundColor:"#ffd4d5"}} className="cakeUploads col-md-8 offset-md-2">
        <div>
          <div className="cakeUploadsTopic">
            <h4><b>Get your own customized cake from us.</b></h4>
            <br></br>
            <h5>The procedure for getting customized cakes is as follows:<br/></h5>
          </div>
          <div className="cakeUploadsBody">
          <link href="https://fonts.googleapis.com/css?family=Ubuntu+Condensed" rel="stylesheet"/>
            <h5>1)Once you upload an image of your desired cake, it will go to all the cake providers connected with us all over Sri Lanka<br/></h5>
            <h5>2)If they accept to do the cake order we will display it in the site.<br/></h5>
            <h5>3)There may be many cake providers willing to complete your order & you will be able to select the cake provider you desire to customize your cake.<br/></h5>
            <h5>All the accepted cake providers will display the their price for the order(Note that prices from different cake providers will be different)<br/></h5>
            <h5>You may choose your desired cake shop from the list of accepted cake providers to complete your cake order.<br/></h5>
          </div>
        </div>
        <div style={{marginTop:"20px",marginLeft:"410px",paddingBottom:"20px"}} className="col-12 col-md-4"  >
          <UploadCake/>
        </div>
        </div>
        
        <div>
        <Footer/>
      </div> 
      </div>
    );
  }
}

export default Uploading;