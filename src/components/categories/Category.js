import React, { Component } from 'react';
import {categoryData} from './CategoryData';
import CategoryCard from './CategoryCard';
import Navbar from '../nav_bar/Navbar'
import Footer from '../footer/Footer'


class Category extends Component {

    cakeRenderedArray = categoryData.map(ele => {
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
      <div  id="backgroundMiddle" style={{backgroundColor:"#ffd4d5",paddingTop:"50px"}} className="col-md-10 offset-md-1">
       
        <div style={{textAlign:"center",paddingTop:5,fontFamily: 'Sofia'}}>
            <h1><b>Cake Categories</b></h1>
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

export default Category;