import React, { Component } from 'react';
import CarousalElems from './CarousalElems'

class App extends Component {
    render() {
        const elem=CarousalElems.elems.map((elem)=>{
            if(elem.id === 1){
                return(
                    <div key={elem.id} className="carousel-item active no_core_logo">
                        <img className="d-block w-100" onClick={() => {}} src={elem.image} alt="First slide"/>
                        <div>{this.name}</div>
                    </div>
                )
            }else{
                return(
                        <div key={elem.id} className="carousel-item no_core_logo">
                            <img className="d-block w-100" src={elem.image} alt="First slide"/>
                        </div>
                )
            }
            

        })
    return (
        <div>
            <div className="col-sm-2"></div>
            <div className="col-sm-10">
                <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {[elem]}
                 </div>  
             </div>
            </div>
         <div className="col-sm-2"></div>
        </div>


    );
  }
}

export default App;