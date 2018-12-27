import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"

class AboutCakeCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity:"1",
      text:""
    };



  }

  onClick=()=>{
    let a=this.props.location.pathname.split("/")
    let shopUserName=a[a.length-2]
    let cakeId=a[a.length-1]
    let email=this.props.email
    let quantity=this.state.quantity
    let response={
      shopUserName,
      cakeId,
      email,
      quantity
    }
    this.props.socket.emit("SET_ORDER",response)
    
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  changeText=(text)=>{
    this.setState({
      text
    })
  }

  componentDidMount(){
    this.props.socket.on("ORDER_SAVE_SUCCESSFULL",()=>{
      this.changeText("ORDER_SAVE_SUCCESSFULL")
     })
 
 
     this.props.socket.on("ORDER_SAVE_ERROR",()=>{
      this.changeText("ORDER_SAVE_ERROR")
      })
    
    
  }

  render() {
    
    return (
        <div id="backgroundMiddle" className=" homeMid " style={{marginTop:"20px",marginBottom:"20px",marginRight:"130px",marginLeft:"130px",paddingTop:"20px",paddingBottom:"20px"}}>
        <div className="row">
          <div className="col-12 offset-0 col-md-6 offset-md-0">
            <img src={this.props.image} alt="" style={{width:"100%",paddingLeft:"255px"}}/>

            
          </div>
      
          <div style={{textAlign:"left",paddingRight:"255px"}} className="col-10 offset-1 col-md-6 offset-md-0">
            <h3>{this.props.title}<span style={{fontSize:"20px"}}>({this.props.weight} lbs)</span></h3>
            <p>LKR {this.props.price}</p>
            <p style={{color:"#666666"}}>{this.props.description}</p>
            <div style={{paddingLeft:"15px",justifyContent:"centre",display:"flex"}}className="row">
              <p style={{paddingTop:"1px",paddingBottom:"10px",height:"10px"}}>Quantity:&nbsp;</p>
              <input name="quantity" value={this.state.quantity} onChange={e => this.onChange(e)} style={{width:"50px"}}/>
            </div>
            <p>{this.state.text}</p>
            <button style={{marginTop:"10px"}} type="button" onClick={this.onClick} className="btn btn-info"><i className="fa fa-credit-card"/>&nbsp;Buy It Now</button>
          </div>


        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  
  return{ email:state.login.email}
 }
 
 

export default withRouter(connect(mapStateToProps,null)(AboutCakeCard));