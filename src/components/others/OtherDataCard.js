import React, { Component } from 'react';



class OtherDataCard extends Component {
  render() {
    return (
            <div className="card col-3 cardStyles">
                <img className="card-img-top" src={this.props.image} width={90} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.text}</p>
                    <a href="#" className="btn btn-primary cakeButton">{this.props.buttonText}</a>
                </div>
            </div>
    );
  }
}

export default OtherDataCard;