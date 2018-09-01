import React, { Component } from 'react';


class Scroll extends Component {
  render() {
    return (
      <div id="scroll" style={{position:"right",overflow:"scroll",height:400, overflowX: 'hidden', backgroundColor: '#fffaf9'}}>
        <link href="https://fonts.googleapis.com/css?family=Merienda" rel="stylesheet"></link>
        <div id="section1" className="container-fluid">
            <h5><b>Wedding Cakes</b></h5>
            <img src="../dependencies/pics/wedding.jpg" width="92" alt="alternative txt"></img>
            <p>Make your wedding day even more special with the perfect wedding cake</p>
        </div>
        <div id="section2" className="container-fluid">
            <h5><b>Birthday Cakes</b></h5>
            <img src="../dependencies/pics/birthday.jpg" width="92" alt="alternative txt"></img>
            <p>Find the perfect Birthday Cake for your loved ones</p>
        </div>
        <div id="section3" className="container-fluid">
            <h5><b>Section 3</b></h5>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
        </div>
        <div id="section41" className="container-fluid">
            <h5><b>Section 4 Submenu 1</b></h5>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
        </div>
        <div id="section42" className="container-fluid">
            <h5><b>Section 4 Submenu 2</b></h5>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
        </div>

      </div>
    );
  }
}

export default Scroll;
