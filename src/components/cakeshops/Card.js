import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Card extends Component {
  render() {
    return (
            <div className="card col-md-3 col-12 cardStyles">
                <img className="card-img-top" src={this.props.image} width={90} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.text}</p>
                    <Link style={{color:"#252525"}} to={this.props.to}>
                      <a  className="btn btn-primary cakeButton">{this.props.buttonText}</a>
                    </Link>
                </div>
            </div>
    );
  }
}

export default Card;