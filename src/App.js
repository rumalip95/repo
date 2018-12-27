import React, { Component } from 'react';
import Main from './screens/Main'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Customizing from './screens/Customizing'
import Designing from './screens/Designing'
import Uploading from './screens/Uploading'
import Payments from './screens/Payments'
import AboutCakes from './screens/AboutCakes'
import CakeCompanies from './screens/CakeCompanies'
import CakeCompany from './components/cakeCompanies/CakeCompany'
import Categories from './screens/Categories'
import {CONNECTION_URL} from './constants'
import openSocket from 'socket.io-client';
import{Route,Switch} from "react-router-dom";
import CakedCakes from './components/cakeCompanies/CakedCakes'
import CakeShops from './components/cakeshops/CakeShops'
import CreateCake from './screens/CreateCake'
import OrderAcceptedList from './screens/OrderAcceptedList'
import Other from './screens/Other'
import {connect} from "react-redux"
import {loginCustomer}from "./redux/actions/LoginActions"
import {withRouter} from "react-router-dom"
import CakeProviderHome from './screens/CakeProviderHome'
import CustomizingOrder from "./components/serviceprovider/CustomizingOrder"
import DisplayOrders from "./components/order/DisplayOrders"
import CakeShopChoice from "./components/customizing/CakeShopChoice"



export const socket = openSocket(CONNECTION_URL);

class App extends Component {
  
  constructor(props){
    super(props)
    this.state={
      email:null,
      password:null
    }
  }
  componentWillMount(){
    console.log(localStorage.getItem("email"))
    this.props.loginCustomer({email:localStorage.getItem('email') || "" ,password:localStorage.getItem('password') || ""})

  }

   screens ={
    SignUp: () => (<SignUp socket={socket}/>),
    Uploading:()=>(<Uploading socket={socket}/>),
    CakeProviderHome:()=>(<CakeProviderHome socket={socket}/>),
    Login:()=>(<Login socket={socket}/>),
    CreateCake:()=>(<CreateCake socket={socket}/>),
    AboutCakes:()=>(<AboutCakes socket={socket}/>),
    DisplayOrders:()=>(<DisplayOrders socket={socket}/>)
  }
  componentDidMount(){
    if(localStorage.getItem('email'))
    {
      socket.emit("Login",{email:localStorage.getItem('email') ,password:localStorage.getItem('password')})
    }
    
  }
  render() {

    
    
    return (
      <div>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/uploading" component={this.screens.Uploading}/>
              <Route path="/Login" component={this.screens.Login}/>
              <Route path="/SignUp" component={this.screens.SignUp}/>
              <Route path="/CakeCompanies" component={CakeCompanies}/>
              <Route path="/DisplayOrders" component={this.screens.DisplayOrders}/>
              <Route exact path="/CakedCakes" component={CakedCakes}/>
              <Route path="/shops/:userName/:cakeID" component={this.screens.AboutCakes}/>
              <Route exact path="/CakeShopChoice" component={CakeShopChoice}/> {/*for the customizing part*/}
              {/* <Route exact path="/Customizing" component={Customizing}/> */}
              <Route exact path="/:companyName/Customizing" component={Customizing}/>
              <Route path="/Customizing/CreateCake" component={this.screens.CreateCake}/>
              <Route exact path="/Other" component={Other}/>
              <Route exact path="/CakeShops" component={CakeShops}/>
              <Route exact path="/Customizing/Uploading" component={this.screens.Uploading}/>
              <Route path="/shops" component={CakedCakes}/>

              <Route exact path="/Payments" component={Payments}/> {/*for the payments interface*/}
              <Route exact path="/OrderAcceptedList" component={OrderAcceptedList}/> {/*for the customer's customized cake order accepted list interface*/}
      
              <Route exact path="/CakeProviderHome" component={this.screens.CakeProviderHome}/> {/*for the cake provider's interface*/}
              <Route path="/CakeProviderHome/CustomizingOrder" component={CustomizingOrder}/>
            </Switch>
            
            {/* <CreateCake/> */}

                
        
      </div>
    );
  }
}

const mapActionsToProps={
  loginCustomer
}


export default withRouter(connect(null,mapActionsToProps)(App));

