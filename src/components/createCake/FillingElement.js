import React, { Component } from 'react';



class FillingElement extends Component {

  

  renderElement=(type)=>{
    switch(type){
      case"Vanilla Topping":
        return"/dependencies/svgs/vanilla_topping.svg";
        break;
      case"Vanilla Flavour":
        return"/dependencies/svgs/vanillaLayer.svg";
        break;
      default:
        return ""
        break;
    }
  }

  render() {
    return (
      <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
          <img src={this.renderElement(this.props.type)}/>
          <div style={{height:"100%",paddingTop:"20px",paddingLeft:"20px"}}>
            <p>{this.props.type}</p>
          </div>
      </div>
    );
  }
}

export default FillingElement;