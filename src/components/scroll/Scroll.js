import React, { Component } from 'react';


class Scroll extends Component {
  render() {
    return (
      <div id="scroll" style={{position:"right",overflow:"scroll",height:400,textAlign:"justify",paddingTop:"20px",paddingLeft:"20px", overflowX: 'hidden',margin:"20px", backgroundColor: '#ffd4d5',boxShadow:"0 0px 5px rgba(0,0,0,0.2),0 0 40px rgba(0,0,0,0.1)"}}>
        <link href="https://fonts.googleapis.com/css?family=Merienda" rel="stylesheet"></link>
        <div id="section1" className="container-fluid">
            <h5><b>Wedding Cakes</b></h5>
            <img src="../dependencies/pics/wedding5.jpg" width="170" alt="alternative txt"></img>
            <p>Make your wedding day even more special with the perfect cake</p>
        </div>
        <div id="section2" className="container-fluid">
            <h5><b>Birthday Cakes</b></h5>
            <img src="../dependencies/pics/birthday5.jpg" width="170" alt="alternative txt"></img>
            <p>Find the perfect Birthday Cake for your loved ones</p>
        </div>
        <div id="section3" className="container-fluid">
            <h5><b>Engagement</b></h5>
            <img src="../dependencies/pics/cakeshops7.jpg" width="170" alt="alternative txt"></img>
            <p>We will find you the perfect engagement cake.</p>
            
        </div>
        <div id="section41" className="container-fluid">
            <h5><b>Berry Cakes</b></h5>
            <img src="../dependencies/pics/kapruka.jpg" width="170" alt="alternative txt"></img>
            <p>The juciest berries for your special day</p>
            
        </div>
        <div id="section42" className="container-fluid">
            <h5><b>Cupcakes</b></h5>
            <img src="../dependencies/pics/caro1.jpg" width="170" alt="alternative txt"></img>
            <p>We have new cupcakes of your favourite flavour.</p>
           
        </div>

      </div>
    );
  }
}

export default Scroll;
