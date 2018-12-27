import React, { Component } from 'react';



class Footer extends Component {
  render() {
    return (
      <div>
        
<div id="footer" className= "col-md-10 offset-1">
    <div className="container">
        <div className="row">
              <div className="col-md-4">
                <center>
                  <img src="/dependencies/pics/about us.jpg" className="img-circle" alt="Avatar"/>
                  
                  <h4 className="footertext">Info</h4>
                  <p className="footertext">About Cakez<br/></p>
                  <p className="footertext">FAQ<br/></p>
                </center>
              </div>
              <div className="col-md-4">
                <center>
                  <img src="/dependencies/pics/privacyPolicy.jpg" className="img-circle" alt="..."/>
                  
                  <h4 className="footertext">Privacy Policy</h4>
                  <p className="footertext">Terms & Conditions<br/></p>
                </center>
              </div>
              <div className="col-md-4">
                <center>
                  <img src="/dependencies/pics/telephone.png" className="img-circle" alt="..."/>
                 
                  <h4 className="footertext">Contact Us</h4>
                  
                </center>
              </div>
            </div>
            
    </div>
</div>
      </div>
    );
  }
}

export default Footer;