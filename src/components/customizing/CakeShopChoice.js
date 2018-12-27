import React, { Component } from 'react';
import { cakeData } from '../cakeshops/CakeshopsData';
import Card from '../cakeshops/Card';
import { connect } from "react-redux"
import { loadShops } from "../../redux/actions/ShopsActions"
import Customizing from "../../screens/Customizing"
import Navbar from '../nav_bar/Navbar'
import Footer from '../footer/Footer'

class CakeShopChoice extends Component {

    componentDidMount() {
        this.props.loadShops()
    }

    renderCakeArray = (data) => {
        return data.map(ele => {
            return (
                <Card
                    key={ele._id}
                    title={ele.companyName}
                    image={ele.image}
                    to={"/"+ele._id+"/Customizing"}
                    text={ele.description}
                    buttonText={"Click Here"}
                    image={ele.image}
                />
            )
        })
    }

    renderToRow = (array) => {
        let finalArray = [];
        const chunk = 3;
        let i, j, tempArray, renderRow;
        for (i = 0, j = array.length; i < j; i += chunk) {
            tempArray = array.slice(i, i + chunk);
            renderRow = (
                <div key={i} className="row">
                    {[tempArray]}
                </div>
            )
            finalArray.push(renderRow)
        }
        return finalArray;
    }



    render() {

        return (

            <div>
                <div>
                    <img className="logo" src="/dependencies/pics/newlogo2.png" />
                    <Navbar />
                </div>
                <div id="backgroundMiddle" style={{ backgroundColor: "#ffd4d5" }} className="col-md-10 offset-md-1">
                    
                    <div style={{ textAlign: "center", paddingTop: 50, fontFamily: 'Sofia' }}>
                        <h3><b>To get your own customized cake, first select a cake shop of your choice.</b></h3>
                    </div>

                    <div className="col">
                        {this.renderToRow(this.renderCakeArray(this.props.shopsData))}
                    </div>
                </div>


                <div>
                    <Footer />
                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { shopsData: state.shops.shops }
}

const mapDispatchToProps = {
    loadShops: loadShops
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeShopChoice);
