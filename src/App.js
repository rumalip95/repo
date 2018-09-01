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
import Categories from './screens/Categories'
import {CONNECTION_URL} from './constants'
import openSocket from 'socket.io-client';
import{Route,Switch} from "react-router-dom";
import CakedCakes from './components/cakeCompanies/CakedCakes'
import CreateCake from './screens/CreateCake'


const socket = openSocket(CONNECTION_URL);

class App extends Component {
  

  
  render() {

    const screens ={
      SignUp: () => (<SignUp socket={socket}/>),
      Uploading:()=>(<Uploading socket={socket}/>),
      Login:()=>(<Login socket={socket}/>)
    }

    return (
      <div>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/uploading" component={screens.Uploading}/>
              <Route path="/Login" component={screens.Login}/>
              <Route path="/SignUp" component={screens.SignUp}/>
              <Route path="/AboutCakes" component={AboutCakes}/>
              <Route path="/CakeCompanies" component={CakeCompanies}/>
              <Route path="/Customizing" component={Customizing}/>
              <Route path="/Categories" component={Categories}/>
              <Route path="/CakedCakes" component={CakedCakes}/>
            </Switch>
            

                
        
      </div>
    );
  }
}



export default App;

