import React, { Component } from 'react';


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            active : "Home",
        }
    }

    changeColor = () => {
        console.log(this.getAttribute('data-value'))
        if(this.getAttribute('data-value') === this.state.active){

        }
    }


    render() {
        const navbar={
            right:0,
            position:"absolute"

        }

        const inactiveItem = {
            color: "#505052"
        }

        const activeItem={
            color: "#7a7a7a",
        }
        
        return (
            
            <div id="navbarwrap"  className="col-md-10 offset-md-1">
            
                <div id="navbar" style={navbar}>
              
                    <ul id="navbar_list">
                    
                        <li onClick={()=> this.setState({
                        active : 'Login',
                    })}>Login</li>
                        <li onClick={()=> this.setState({
                        active : 'Signup',
                    })}>Signup</li>
                    </ul>
                </div>             
                <ul id="navbar_list">
                    <li onClick={()=> this.setState({
                        active : 'Home',
                    })}>Home</li>
                   
                    <li onClick={()=> this.setState({
                        active : 'Categories',
                    })}>Custom cake</li>
                    
                    <li onClick={()=> {
                        
                        this.setState({
                            active : 'Custom Cakes',
                        })
                    }}>Categories</li>
                    <li onClick={()=> {
                        
                        this.setState({
                            active : 'Cupcakes & Gifts',
                        })
                    }}>Cupcakes & Gifts</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
