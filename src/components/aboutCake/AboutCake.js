import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {connect} from "react-redux"
import {loadCakes} from "../../redux/actions/ShopsActions"
import {withRouter} from "react-router-dom"
import { cakedCakeData } from '../cakeCompanies/CakedCakesData';
import AboutCakeCard from './AboutCakeCard';


class AboutCake extends Component {
  componentDidMount(){
    let a=this.props.location.pathname.split("/")
    let userName=a[a.length-2]
    

    this.props.loadCakes(userName)
}

findingCake=(data)=>{
  let a=this.props.location.pathname.split("/")
  let id=a[a.length-1]
  let obj={};
  for(let i=0;i<data.length;i++){
    if(data[i]._id===id){
      obj=data[i];
    }
  }
  return obj
}

cakeRenderedArray = (ele) => {
 
    return (
      <AboutCakeCard
        socket={this.props.socket}
        key={ele.id}
        to={"/"+ele._id}
        title={ele.title}
        description={ele.text}
        buttonText={"Buy It Now"}
        image={ele.image}
        weight={ele.weight}
        price={ele.price}
      />
    )
  
}

  render() {
    return (
      <div className="col">
      
          {this.cakeRenderedArray(this.findingCake(this.props.cakesData))}
       </div>
      
    );
  }
}

const mapStateToProps=(state)=>{
  
  return{ cakesData:state.shops.cakes}
 }
 
 const mapDispatchToProps={
  loadCakes: loadCakes
 }


export default withRouter(connect(mapStateToProps,mapDispatchToProps)( AboutCake));