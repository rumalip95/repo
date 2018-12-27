import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class UploadedImageOrderForCustomerCard extends Component {
  render() {
    return (
            <div className="card col-md-6 col-12 cardStyles">
                <img className="card-img-top" src={this.props.image} width={90} alt="Card cap"/>
                <div className="card-body">
                    <p className="card-text">{this.props.description}</p>
                    <p className="card-text">{this.props.uploadedDate}</p>
                    <p className="card-text">{this.props.deadline}</p>
                    
                    
                </div>
            </div>
    );
  }
}

export default UploadedImageOrderForCustomerCard;