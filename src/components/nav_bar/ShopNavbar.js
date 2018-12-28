import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { loginCustomer } from "../../redux/actions/LoginActions"
import { connect } from "react-redux"


class ShopNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "Home",
        }
    }

    changeColor = () => {
        console.log(this.getAttribute('data-value'))
        if (this.getAttribute('data-value') === this.state.active) {

        }
    }

    renderLoginSignup = () => {
        return (
            <span>
                <Link style={{ color: "#252525" }} to="/Login">
                    <li onClick={() => this.setState({
                        active: 'Login',
                    })}>Login</li>
                </Link>

                <Link style={{ color: "#252525" }} to="/SignUp">
                    <li onClick={() => this.setState({
                        active: 'Signup',
                    })}>Signup</li>
                </Link>
            </span>
        )
    }

    logout = () => {
        this.props.loginCustomer({ email: "", password: "" })
        localStorage.clear() //clearing all cookies
    }


    renderUserIfLoggedIn = (userName) => {
        return (
            <span className="row">
                <li>{userName}</li>
                <li onClick={() => this.logout()}>Logout</li>
            </span>
        )
    }

    renderUser = () => {

        if (this.props.login.email === "") {
            return this.renderLoginSignup()

        }
        else {
            return this.renderUserIfLoggedIn(this.props.login.email)
        }

    }

    render() {
        const navbar = {
            right: 0,
            position: "absolute"

        }

        const inactiveItem = {
            color: "#505052"
        }

        const activeItem = {
            color: "#7a7a7a",
        }

        return (

            <div id="navbarwrap" className=" rounded col-md-10 offset-md-1">

                <div id="navbar" style={navbar} >
                    <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'></link>
                    <ul className="dropdown mega-dropdown" id="navbar_list" >

                        {this.renderUser()}
                       
                    </ul>


                </div>
                <ul id="navbar_list">

                    

                    <Link style={{ color: "#252525" }} to="/CakeProviderHome">
                        <li onClick={() => {

                            this.setState({
                                active: 'Shop Name',
                            })
                        }}>My Shop</li>
                    </Link>

                    <Link style={{ color: "#252525" }} to="/CakeProviderHome/CustomizingOrder">
                        <li onClick={() => this.setState({
                            active: 'Home',
                        })}>My Orders</li>
                    </Link>

                    

                </ul>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { login: state.login }
}
const mapActionsToProps = {
    loginCustomer
}

export default connect(mapStateToProps, mapActionsToProps)(ShopNavbar);
