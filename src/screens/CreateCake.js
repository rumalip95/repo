import React, { Component } from 'react';
import UploadCake from '../components/uploadcake/UploadCake.js'
import Navbar from '../components/nav_bar/Navbar'
import Footer from '../components/footer/Footer'
import RenderFillingElements from '../components/createCake/RenderFillingElements';

class CreateCake extends Component {
  constructor(props){

    super(props);
    this.state={
      noOfLayers:1
    }
  }

  onChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value,
    })
  }

  render() {
    return (
      <div>

        <div>
          <img className="logo" src="./dependencies/pics/newlogo2.png"/>
          <Navbar/>
        </div>

        <div id="backgroundMiddle" style={{backgroundColor:"#ffd4d5"}} className="cakeUploads col-md-10 offset-md-1">

          <div>

            <div className="cakeUploadsTopic">
              <h4><b>Get your own customized cake from us.</b></h4>
              <br></br>
              <h5>The procedure for getting customized cakes is as follows:<br/></h5>
            </div>

            <div className="row">

              <div className="col-12 col-md-7">
                <RenderFillingElements noOfLayers={this.state.noOfLayers}/>
              </div>

              <div className="col-12 col-md-5" style={{display:"flex",flexDirection:"row",paddingTop:"20px"}}>
                <p style={{justifyText:"right"}} className="col-5" >Number of cake layers:</p><input onChange={e=>this.onChange(e)} value={this.state.noOfLayers} style={{height:"30px"}} name="noOfLayers" type="number"  className="form-control col-3" placeholder="NO. of layers" required autoFocus/>
              </div>
            </div>

          </div>
        
        </div>
        
        <div>
        <Footer/>
      </div> 
      </div>
    );
  }
}

export default CreateCake;