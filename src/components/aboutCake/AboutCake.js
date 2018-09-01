import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';


class AboutCake extends Component {
  render() {
    return (
      <div style={{marginTop:"20px",marginBottom:"20px",paddingTop:"20px",paddingBottom:"20px"}}>
        <div className="row">
          <div className="col-10 offset-1 col-md-6 offset-md-0">
            <img src="./dependencies/pics/cakeshops1.jpg" alt="" style={{width:"100%",paddingLeft:"255px"}}/>

            
          </div>
      
          <div style={{textAlign:"left",paddingRight:"255px"}} className="col-10 offset-1 col-md-6 offset-md-0">
            <h3>{this.props.title}<span style={{fontSize:"20px"}}>({this.props.weight} lbs)</span></h3>
            <p>LKR {this.props.price}</p>
            <p>Manufactured Date: {this.props.manufacturedDate}</p>
            <p style={{color:"#666666"}}>{this.props.description}</p>
            <div style={{paddingLeft:"15px",justifyContent:"centre",display:"flex"}}className="row">
              <p style={{paddingTop:"1px",paddingBottom:"10px",height:"10px"}}>Quantity:&nbsp;</p>
              <input style={{width:"50px"}}/>
            </div>
            <button style={{marginTop:"10px",marginRight:"10px"}} type="button" className="btn btn-info"><i className="fa fa-shopping-cart"/>&nbsp;Add To Cart</button>
            <button style={{marginTop:"10px"}} type="button" className="btn btn-info"><i className="fa fa-credit-card"/>&nbsp;Buy It Now</button>
          </div>
        </div>
      </div>
      
    );
  }
}

export default AboutCake;