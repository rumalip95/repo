import React, { Component } from 'react';
import {birthdayCakeData} from './BirthdayCakeData';
import CategoryCard from './CategoryCard';
import Navbar from '../nav_bar/Navbar'
import Footer from '../footer/Footer'


class BirthdayCakes extends Component {

    cakeRenderedArray = birthdayCakeData.map(ele => {
        return(
            <CategoryCard
                key = {ele.id}
                title={ele.title}
                text={ele.text}
                buttonText={ele.buttonText}
                image={ele.image}
            />
        )
    })
    
    renderToRow = (array) => {
        let finalArray = [];
        const chunk = 3;
        let i,j, tempArray, renderRow;
        for (i=0,j=array.length; i<j; i+=chunk) {
            tempArray = array.slice(i,i+chunk);
            renderRow = (
                <div key={i} className="row">
                    {[tempArray]}
                </div>
            )
            finalArray.push(renderRow)
        }
        return finalArray;
    }
    
    componentWillMount(){
        this.cakeRenderedArray = this.renderToRow(this.cakeRenderedArray);
    }

  render() {
    return (
      <div>
          <img className="logo" src="./dependencies/pics/newlogo2.png"/>
          <Navbar/>
      <div  id="backgroundMiddle" style={{backgroundColor:"#ffd4d5"}} className="col-md-8 offset-md-2">
        <li id="searchBar">
          <form className="navbar-form navbar-left" action="/action_page.php">
            <div className="input-group" style={{width:"500px",paddingBottom:"20px"}}>
              <input type="text" class="form-control" placeholder="Search Cakes" name="search"/>
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </li>
        <div style={{textAlign:"center",paddingTop:5,fontFamily: 'Sofia'}}>
            <h1><b>Birthday Cakes</b></h1>
        </div>
        <div className="col">
                {[this.cakeRenderedArray]}
        </div>
        </div>
        <div>
        <Footer/>
      </div> 
      </div>
      
    );
  }
}

export default BirthdayCakes;