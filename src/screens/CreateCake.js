import React, { Component } from 'react';
import UploadCake from '../components/uploadcake/UploadCake.js'
import Navbar from '../components/nav_bar/Navbar'
import Footer from '../components/footer/Footer'
import RenderFillingElements from '../components/createCake/RenderFillingElements';

class CreateCake extends Component {
  constructor(props){

    super(props);
    
    this.state={
      
      noOfLayers:1,
      addTopping:false,
      isTopping:false,
      toppings:{
        vanillaTopping:true,
        whiteFondant:false,
        chocolateIcing:false,
        brownFondant:false,
        blueIcing:false,
        pinkIcing:false
      },
      addCakeFlavour:false,
      isCakeFlavour:false,
      cakeFlavours:{
        vanillaFlavour:true,
        Chocolate:false,
        strawberry:false,
        redvelvet:false,
        lemon:false,
        coconut:false,
        carrot:false
      },
      addFilling:false,
      isFilling:false,
      fillings:{
        vanillaButtercream:true,
        chocolateButtercream:false,
        strawberry:false,
        coffeeFilling:false
      }
      



    }
  }

  

  onChangeRadio=(e)=>{
    const toppings={
      vanillaTopping:false,
      whiteFondant:false,
      chocolateIcing:false,
      brownFondant:false,
      blueIcing:false,
      pinkIcing:false
    }
    this.setState({
        toppings:{
          ...toppings,
          [e.target.name]:e.target.value,
        }
        
    })

    const cakeFlavours={
      vanilla:true,
        Chocolate:false,
        strawberry:false,
        redvelvet:false
    }
    this.setState({
      cakeFlavours:{
        ...cakeFlavours,
        [e.target.name]:e.target.value,
      }
    })

    const fillings={
      vanillaButtercream:true,
        chocolateButtercream:false,
        freshStrawberries:false,
        coffeeFilling:false
    }
    this.setState({
      fillings:{
        ...fillings,
        [e.target.name]:e.target.value,
      }
    })
  }

  topping=()=>{
    if(this.onChangeCheckbox){
      if(this.onChangeRadio()){
        
      }
    }
  }

  toppingSelector=(name,topic,value,image)=>{

    return (
      <div>

         <p>{name} <input name={topic} checked={value} onChange={e=>this.onChangeRadio(e)} type="radio"/></p>
      </div>
    )
  }

  cakeFlavourSelector=(name,topic,value)=>{

    return (
      <div>

         <p>{name} <input name={topic} checked={value} onChange={e=>this.onChangeRadio(e)} type="radio"/></p>
         
      </div>
    )
  }
  
  fillingsSelector=(name,topic,value)=>{

    return (
      <div>

         <p>{name} <input name={topic} checked={value} onChange={e=>this.onChangeRadio(e)} type="radio"/></p>
      </div>
    )
  }

onSubmit=(e)=>{
    e.preventDefault();
    this.props.socket.emit("SubmitCake",{
      ...this.state
  })
    
}

onChangeCheckbox=(e)=>{
  this.setState({
    isTopping: !this.state.isTopping
  })
}

onChangeCheckbox2=(e)=>{
  this.setState({
    isCakeFlavour: !this.state.isCakeFlavour
  })
}

onChangeCheckbox3=(e)=>{
  this.setState({
    isFilling: !this.state.isFilling
  })
}



  render() {
    const renderToppingSelector=()=>{
      if(this.state.isTopping){
        
        return toppingTypes
      }
      
      
    }
    
    const toppingTypes=(
      <div style={{boxShadow:"0 0px 5px rgba(0,0,0,0.2),0 0 40px rgba(0,0,0,0.1)",paddingTop:"20px"}}>
        {this.toppingSelector("Vanilla Topping","vanillaTopping",this.state.toppings.vanillaTopping)}
        {this.toppingSelector("White Fondant","whiteFondant",this.state.toppings.whiteFondant)}
        {this.toppingSelector("Chocolate Icing","chocolateIcing",this.state.toppings.chocolateIcing)}
        {this.toppingSelector("Brown Fondant","brownFondant",this.state.toppings.brownFondant)}
        {this.toppingSelector("Blue Icing","blueIcing",this.state.toppings.blueIcing)}
        {this.toppingSelector("Pink Icing","pinkIcing",this.state.toppings.pinkIcing)}
      </div>
    )
  
    const renderCakeFlavourSelector=()=>{
      if(this.state.isCakeFlavour){
        
        return cakeFlavourTypes
      }
    }

    const cakeFlavourTypes=(
      <div style={{boxShadow:"0 0px 5px rgba(0,0,0,0.2),0 0 40px rgba(0,0,0,0.1)",paddingTop:"20px"}}>
        {this.toppingSelector("Vanilla Flavour","vanillaFlavour",this.state.cakeFlavours.vanilla)}
        {this.toppingSelector("Chocolate Flavour","chocolateFlavour",this.state.cakeFlavours.Chocolate)}
        {this.toppingSelector("Strawberry Flavour","strawberryFlavour",this.state.cakeFlavours.strawberry)}
        {this.toppingSelector("Red Velvet","redvelvet",this.state.cakeFlavours.redvelvet)}
        {this.toppingSelector("Lemon","lemon",this.state.cakeFlavours.lemon)}
        {this.toppingSelector("Coconut","coconut",this.state.cakeFlavours.coconut)}
        {this.toppingSelector("Carrot","carrot",this.state.cakeFlavours.carrot)}
      </div>
    )
  
    const renderFillingSelector=()=>{
      if(this.state.isFilling){
        
        return fillingTypes
      }
      
      
    }
    
    const fillingTypes=(
      <div style={{boxShadow:"0 0px 5px rgba(0,0,0,0.2),0 0 40px rgba(0,0,0,0.1)",paddingTop:"20px"}}>
        {this.toppingSelector("Vanilla Buttercream","vanillaButtercream",this.state.toppings.vanillaButtercream)}
        {this.toppingSelector("Chocolate Buttercream","chocolateButtercream",this.state.toppings.chocolateButtercream)}
        {this.toppingSelector("Strawberry","strawberry",this.state.toppings.strawberry)}
        {this.toppingSelector("Coffee Filling","coffeeFilling",this.state.toppings.coffeeFilling)}
       
      </div>
    )

    return (
      <div>

        <div>
          <img className="logo" src="/dependencies/pics/newlogo2.png"/>
          <Navbar/>
        </div>

        <div id="backgroundMiddle" style={{backgroundColor:"#ffd4d5"}} className=" col-md-10 offset-md-1">

          <div>

            <div className="cakeUploadsTopic">
              <h4><b>Get your own customized cake from us.</b></h4>
              <br></br>
              <h5>The procedure for getting customized cakes is as follows:<br/></h5>
            </div>

            <div className="row" style={{ boxShadow:"0 0px 5px rgba(0,0,0,0.2),0 0 40px rgba(0,0,0,0.1)",padding:"20px",margin:"30px",paddingBottom:"30px"}}>

              <div className="col-12 col-md-7">
              
              <RenderFillingElements noOfLayers={this.state.noOfLayers}/>
              </div>
              <div className="col-12 col-md-5">
                <div className="col-5" style={{paddingLeft:"0"}}>
                  <p style={{alignText:"left",justifyText:"right"}}><span style={{paddingRight:"10px"}}>Add Topping</span><input type="checkbox" onChange={e=>this.onChangeCheckbox(e)} name="isTopping" checked={this.state.isTopping} /></p>
                </div>
                <div className="col-12">
                  {renderToppingSelector()}
                </div>

                <div className="col-5" style={{paddingLeft:"0"}}>
                  <p style={{alignText:"left",justifyText:"right"}}><span style={{paddingRight:"10px"}}>Select Cake Flavour</span><input type="checkbox" onChange={e=>this.onChangeCheckbox2(e)} name="isCakeFlavour" checked={this.state.isCakeFlavour} /></p>
                </div>
                <div className="col-12">
                  {renderCakeFlavourSelector()}
                </div>

                <div className="col-5" style={{paddingLeft:"0"}}>
                  <p style={{alignText:"left",justifyText:"right"}}><span style={{paddingRight:"10px"}}>Select Filling type</span><input type="checkbox" onChange={e=>this.onChangeCheckbox3(e)} name="isFilling" checked={this.state.isFilling} /></p>
                </div>
                <div className="col-12">
                  {renderFillingSelector()}
                </div>

                <div  style={{display:"flex",flexDirection:"row",paddingTop:"20px"}}>
                  <p style={{justifyText:"right"}} className="col-6" >Number of cake layers:</p><input onChange={e=>this.onChange(e)} value={this.state.noOfLayers} style={{height:"30px"}} name="noOfLayers" type="number"  className="form-control col-3" placeholder="NO. of layers" required autoFocus/>
                </div>
                <div>
                  <button onClick= {(e)=>{this.onSubmit(e)}} className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Submit</button>
                </div>
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