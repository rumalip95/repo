import React, { Component } from 'react';


class Scroll extends Component {
  render() {
    return (
      <div style={{position:"right",overflow:"scroll",height:400, overflowX: 'hidden', backgroundColor: '#fffaf9'}}>
        <div id="section1" className="container-fluid">
            <h1>Wedding Cakes</h1>
            <img src="../dependencies/pics/wedding.jpg" width="92" alt="alternative txt"></img>
            <p>Make your wedding day even more special with the perfect wedding cake</p>
        </div>
        <div id="section2" className="container-fluid">
            <h1>Birthday Cakes</h1>
            <img src="../dependencies/pics/birthday.jpg" width="92" alt="alternative txt"></img>
            <p>Find the perfect Birthday Cake for your loved ones</p>
        </div>
        <div id="section3" className="container-fluid">
            <h1>Section 3</h1>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
        </div>
        <div id="section41" className="container-fluid">
            <h1>Section 4 Submenu 1</h1>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
        </div>
        <div id="section42" className="container-fluid">
            <h1>Section 4 Submenu 2</h1>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
        </div>

      </div>
    );
  }
}

export default Scroll;
