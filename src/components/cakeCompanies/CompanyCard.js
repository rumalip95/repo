import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class CompanyCard extends Component {
  render() {
    return (
            <div className="card col-3 cardStyles">
                <img style={{width:"200px",height:"200px"}} className="card-img-top" src={this.props.image} width={90} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.text}</p>
                    <Link style={{color:"#252525"}} to={this.props.to}>
                      <a href="#" className="btn btn-primary cakeButton">{this.props.buttonText}</a>
                    </Link>
                </div>
            </div>
    );
  }
}

export default CompanyCard;