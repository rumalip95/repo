import React, { Component } from 'react';
import FillingElement from './FillingElement'

class RenderFillingElements extends Component {
  render() {
      
    return (
      <div>
            
           <FillingElement type="Vanilla Topping"/>
           <FillingElement type="Vanilla Flavour"/>    
        
      </div>
    );
  }
}

export default RenderFillingElements;
