import React, { Component } from 'react';
import Navbar from '../nav_bar/Navbar'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { cakeProvidersCakeData } from '../serviceprovider/CakeProvidersCakeData';
import CakeProvidersCakeCard from '../serviceprovider/CakeProvidersCakeCard';
import { withRouter } from "react-router-dom"
import UploadCakeProviderCake from '../uploadcake/UploadCakeProviderCake.js'
import Uploading from "../../screens/Uploading"
import {cakeData} from './UploadedImageOrderData';
import UploadedImageOrderForCustomerCard from './UploadedImageOrderForCustomerCard';
import Footer from '../footer/Footer'
import {connect} from "react-redux"



class DisplayOrders extends Component {
    renderCakeArray=()=>{
        return  cakeData.map(ele => {
              return (
                <UploadedImageOrderForCustomerCard
                  key={ele.id}
                  description={ele.description}
                  uploadDate={ele.uploadDate}
                  deadline={ele.deadline}
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

    componentDidMount(){
        this.props.socket.emit("GET_OFF_THE_SHELF_ORDERS",this.props.email)
    }
    

  render() {
    var cakeRenderedArray = this.renderToRow(this.renderCakeArray()); 
    return (
      <div>
          <div>
                <img className="logo" src="/dependencies/pics/newlogo2.png" />
                    <Navbar />
         </div>
         <div style={{textAlign:"center",paddingTop:5,fontFamily: 'Sofia'}}>
            <h1><b>My Customized Cake Orders</b></h1>
        </div>
        <div className="row">
            <div style={{textAlign:"center",paddingLeft:350,paddingTop:20,fontFamily: 'Sofia'}}>
                <h5><b>My Order</b></h5>
            </div>
            <div style={{textAlign:"center",paddingLeft:200,paddingTop:20,fontFamily: 'Sofia'}}>
            <h5><b>List Of Cake Shops That Have Accepted To Make YOur Cake</b></h5>
        </div>
        </div>
         <div className="col-6">
                    {cakeRenderedArray}
         </div>

         <div>
        <Footer/>
      </div> 
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return { email:state.login.email }
}


export default withRouter(connect(mapStateToProps,null)(DisplayOrders));