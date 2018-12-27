import React, { Component } from 'react';
import ShopNavbar from '../nav_bar/ShopNavbar'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { cakeProvidersCakeData } from '../serviceprovider/CakeProvidersCakeData';
import CakeProvidersCakeCard from '../serviceprovider/CakeProvidersCakeCard';
import { withRouter } from "react-router-dom"
import UploadCakeProviderCake from '../uploadcake/UploadCakeProviderCake.js'
import Uploading from "../../screens/Uploading"
import {cakeData} from '../order/UploadedImageOrderData';
import UploadedImageOrderCard from '../order/UploadedImageOrderCard';


class CustomizingOrder extends Component {
    renderCakeArray=()=>{
        return  cakeData.map(ele => {
              return (
                <UploadedImageOrderCard
                  key={ele.id}
                  description={ele.description}
                  uploadDate={ele.uploadDate}
                  deadline={ele.deadline}
                  buttonText={ele.buttonText}
                  buttonText2={ele.buttonText2}
                  image={ele.image}
                />
              )
            })
      }

      


      renderToRow = (array) => {
        let finalArray = [];
        const chunk = 2;
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

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    getImageString = (imageString) => {
        this.setState({
            image: imageString
        })
    }

    

  render() {
    var cakeRenderedArray = this.renderToRow(this.renderCakeArray()); 
    return (
      <div>
          <div>
                <img className="logo" src="/dependencies/pics/newlogo2.png" />
                    <ShopNavbar />
         </div>
         <div className="col-6">
                    {cakeRenderedArray}
         </div>
        
      </div>
    );
  }
}

export default withRouter(CustomizingOrder);