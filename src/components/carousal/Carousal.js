import React, { Component } from 'react';
import CarousalElems from './CarousalElems'

class App extends Component {
    render() {
        const elem=CarousalElems.elems.map((elem)=>{
            if(elem.id === 1){
                return(
                    // <div key={elem.id} style={{width:"400px",height:"500px"}} className="carousel-item active no_core_logo">
                    //     <img className="d-block w-100" onClick={() => {}} src={elem.image} alt="First slide"/>
                    //     <div>{elem.name}</div>
                    // </div>

                    <div key={elem.id} className="carousel-item active no_core_logo" style={{position: 'relative'}}>
                        <img className="d-block w-100" src={elem.image} alt="First slide"/>
                        <div style={{position: "absolute",padding:"50px",left:"0",top:"50%", color: '#000000', transform: "translate(0,-50%)"}}>
                            <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet"></link>
                            <h1 style={{padding:"50px"}}><b>Welcome to Cakez</b></h1>
                            <div className="para">
                            <link href="https://fonts.googleapis.com/css?family=Concert+One" rel="stylesheet" />
                            <h3>We help you find your dream cake or get it made from your favourite cake shop.</h3>
                            </div>
                        </div>
                    </div>
                )
            }else{
                return(
                        <div key={elem.id} className="carousel-item no_core_logo">
                            <img className="d-block w-100" src={elem.image} alt="Second slide"/>
                            <div style={{position: "absolute",padding:"50px",left:"0",top:"50%", color: '#000000', transform: "translate(0,-50%)"}}>
                            <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet"></link>
                            <h1 style={{padding:"50px"}}><b>Welcome to Cakez</b></h1>
                            <div className="para">
                            <link href="https://fonts.googleapis.com/css?family=Concert+One" rel="stylesheet" />
                            <h3>We help you find your dream cake or get it made from your favourite cake shop.</h3>
                            </div>
                        </div>
                        </div>
                )
            }
            

        })
    return (
        <div>
            {/* <div className="col-sm-2"></div> */}
            <div  style={{paddingLeft:100}} className="col-12">
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