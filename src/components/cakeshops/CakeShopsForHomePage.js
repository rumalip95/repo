import React, { Component } from 'react';
import { cakeData } from './CakeshopsData';
import Card from './Card';
import { connect } from "react-redux"
import { loadShops } from "../../redux/actions/ShopsActions"

class CakeShopsForHomePage extends Component {

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
                    to={"/shops/" + ele.userName}
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
               

          <div className="col">
          {this.renderToRow(this.renderCakeArray(this.props.shopsData))}
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

export default connect(mapStateToProps, mapDispatchToProps)(CakeShopsForHomePage);
