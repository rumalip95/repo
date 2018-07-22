import React, { Component } from 'react';
import {cakeData} from './CakeshopsData';
import Card from './Card';

class CakeShops extends Component {

    cakeRenderedArray = cakeData.map(ele => {
        return(
            <Card
                key = {ele.id}
                title={ele.title}
                text={ele.text}
                buttonText={ele.buttonText}
            />
        )
    })

    renderToRow = (array) => {
        let finalArray = [];
        const chunk = 3;
        let i,j, tempArray, renderRow;
        for (i=0,j=array.length; i<j; i+=chunk) {
            tempArray = array.slice(i,i+chunk);
            renderRow = (
                <div key={i} className="row">
                    {[tempArray]}
                </div>
            )
            finalArray.push(renderRow)
        }
        return finalArray;
    }

    componentWillMount(){
        this.cakeRenderedArray = this.renderToRow(this.cakeRenderedArray);
    }

    render() {
        return (
            <div className="col">
                {[this.cakeRenderedArray]}
            </div>
        );
    }
}

export default CakeShops;
