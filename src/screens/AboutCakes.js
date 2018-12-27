import React, { Component } from 'react';
import {cakeData} from "../components/aboutCake/AboutCakeData.js";
import AboutCake from '../components/aboutCake/AboutCake.js'
import {renderAboutCake} from "../components/aboutCake/RenderAboutCake.js"
import Navbar from '../components/nav_bar/Navbar'
import Footer from '../components/footer/Footer'

class AboutCakes extends Component {

  render() {
    return (
      <div>
        <div>
          <img className="logo" src="/dependencies/pics/newlogo2.png"/>
          <Navbar/>
      </div>
        {renderAboutCake(cakeData,this.props.socket)}

        <div>
      <Footer/>
      </div> 
      </div>
    );
  }
}

export default AboutCakes;