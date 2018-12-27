import React, { Component } from 'react';
import { cakedCakeData } from './CakedCakesData';
import CompanyCard from './CompanyCard';
import Navbar from '../nav_bar/Navbar'
import Footer from '../footer/Footer'
import {connect} from "react-redux"
import {loadCakes} from "../../redux/actions/ShopsActions"
import {withRouter} from "react-router-dom"

class CakedCakes extends Component {

  
  componentDidMount(){
    
    let a=this.props.location.pathname.split("/")
    let userName=a[a.length-1]
    

    this.props.loadCakes(userName)
}

  cakeRenderedArray = (data) => {
    let a=this.props.location.pathname.split("/")
    let userName=a[a.length-1]
    return data.map(ele => {
      return (
        <CompanyCard
          key={ele.id}
          to={"/shops/"+userName+"/"+ele._id}
          title={ele.title}
          text={ele.text}
          buttonText={"Buy Cake"}
          image={ele.image}
        />
      )
    })
  }

  renderToRow = (array) => {
    let finalArray = [];
    const chunk = 3;
    let i, j, tempArray, renderRow;
    for (i = 0, j = array.length; i < j; i += chunk) {
      tempArray = array.slice(i, i + chunk);
      renderRow = (
        <div key={i} className="row">
          {[tempArray]}
        </div>
      )
      finalArray.push(renderRow)
    }
    return finalArray;
  }

  

  render() {
    
    return (
      <div>
        <div>
          <img className="logo" src="/dependencies/pics/newlogo2.png" />
          <Navbar />
        </div>
        <div id="backgroundMiddle" style={{ backgroundColor: "#ffd4d5" }} className="col-md-10 offset-md-1">
          <li id="searchBar">
            <form className="navbar-form navbar-left" action="/action_page.php">
              <div className="input-group" style={{ width: "500px", paddingBottom: "20px" }}>
                <input type="text" class="form-control" placeholder="Search Cake Shops" name="search" />
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </li>
          <div style={{ textAlign: "center", paddingTop: 5, fontFamily: 'Sofia' }}>
            <h1><b>Caked Cakes</b></h1>
          </div>

          <div className="col">
          {this.renderToRow(this.cakeRenderedArray(this.props.cakesData))}
          </div>
        </div>
        <div>
          <Footer />
        </div>

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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)( CakedCakes));