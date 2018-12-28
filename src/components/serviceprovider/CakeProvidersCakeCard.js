import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class CakeProvidersCakeCard extends Component {
  render() {
    return (
            <div className="card  cardStyles col-3" >
                <img style={{width:"200px",height:"200px"}} className="card-img-top" src={this.props.image} width={90} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">Uploaded Date: {this.props.uploadedDate}</p>
                    <p className="card-text">Expiry Date: {this.props.expiryDate}</p>
                    <p className="card-text">{this.props.text}</p>
                    <a href="#" className="btn btn-primary cakeButton">{this.props.buttonText}</a>
                    
                </div>
            </div>
    );
  }
}

export default CakeProvidersCakeCard;