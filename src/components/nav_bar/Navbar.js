import React, { Component } from 'react';
import Link from 'react-router-dom/Link';


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
            
            <div id="navbarwrap"  className=" rounded col-md-10 offset-md-1">
            
                <div id="navbar" style={navbar} >
                <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'></link>
                    <ul className="dropdown mega-dropdown" id="navbar_list" >
                    
                    <Link style={{color:"#252525"}} to="/Login">
                        <li onClick={()=> this.setState({
                        active : 'Login',
                    })}>Login</li>
                    </Link>
                    
                    <Link style={{color:"#252525"}} to="/SignUp">
                        <li onClick={()=> this.setState({
                        active : 'Signup',
                    })}>Signup</li>
                    </Link>
                    <li id="searchBar">
                    <form className="navbar-form navbar-left" action="/action_page.php">
                        <div className="input-group" style={{width:"200px"}}>
                            <input type="text" class="form-control" placeholder="Search" name="search"/>
                            <div className="input-group-btn">
                            <button className="btn btn-default" type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                            </div>
                        </div>
                    </form>
                    </li>
                    </ul>
                    
                    
                </div>             
                <ul id="navbar_list">
                
                <Link style={{color:"#252525"}} to="/">
                    <li onClick={()=> this.setState({
                        active : 'Home',
                    })}>Home</li>
                </Link>
                   
                <Link style={{color:"#252525"}} to="/Categories">
                    <li onClick={()=> this.setState({
                        active : 'Categories',
                    })}>Categories</li>
                    </Link>
                   
                    
                    <Link style={{color:"#252525"}} to="/CakeCompanies">
                        <li onClick={()=> this.setState({
                            active : 'Cake Shops',
                        })}>Cake Shops</li>
                    </Link>

                    <li onClick={()=> {
                        
                        this.setState({
                            active : 'Custom Cakes',
                        })}}>Custom Cakes</li>
                    <li onClick={()=> {
                        
                        this.setState({
                            active : 'Other',
                        })
                    }}>Other</li>
                </ul>
                
            </div>
        );
    }
}

export default Navbar;
