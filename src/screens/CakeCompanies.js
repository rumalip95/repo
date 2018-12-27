import React, { Component } from 'react';
//import CakeCompany from '../components/cakeCompanies/CakeCompany.js'
import CakeShops from '../components/cakeshops/CakeShops.js'
import Navbar from '../components/nav_bar/Navbar'
import Footer from '../components/footer/Footer'

class CakeCompanies extends Component {
  render() {
    return (
      <div>
        <div>
          <img className="logo" src="/dependencies/pics/newlogo2.png" />
          <Navbar />
        </div>
        <div>
          <CakeShops />
        </div>
        <div>
          <Footer />
        </div>

      </div>
    );
  }
}

export default CakeCompanies;