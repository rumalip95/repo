import React, { Component } from 'react';
import UploadCake from '../components/uploadcake/UploadCake.js'
import Navbar from '../components/nav_bar/Navbar'
import Footer from '../components/footer/Footer'
import DatePicker from "react-datepicker";
import { withRouter } from "react-router-dom"
import "react-datepicker/dist/react-datepicker.css";

class Uploading extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deadline: new Date(),
      description: "",
      image: "",
      error: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      deadline: date
    });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  getImageString = (imageString) => {
    this.setState({
      image: imageString
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: "" })
    if (this.state.image !== "") {
      this.props.socket.emit("Uploading Image", { deadline: this.state.deadline, description: this.state.description, image: this.state.image, uploadDate: new Date() });
    }
    else {
      this.setState({ error: "Please Upload An Image" })
    }
  }

  componentDidMount() {
    this.props.socket.on("Uploaded Cake Image Saved", () => {
      this.props.history.push("/CakeProviderHome")
    })

    this.props.socket.on("Uploaded Cake Image Failed", () => {
      this.setState({ error: "Error" })
    })


  }

  render() {

    return (
      <div>
        <div>
          <img className="logo" src="/dependencies/pics/newlogo2.png" />
          <Navbar />
        </div>
        <div id="backgroundMiddle" style={{ backgroundColor: "#ffd4d5" }} className="cakeUploads col-md-10 offset-md-1">
          <div>
            <div className="cakeUploadsTopic">
              <h1><b>Get your own customized cake from us.</b></h1>
              <br></br>
              <h5>The procedure for getting customized cakes by uploading an image is as follows:<br /></h5>
            </div>
            <div className="cakeUploadsBody">
              <link href="https://fonts.googleapis.com/css?family=Ubuntu+Condensed" rel="stylesheet" />
              <h5>Upload an image below. Also type in a description of how your cake has to be made. In the description section clearly specify the flavour, number of layers, icing type, fondant type and so on. If you upload an image drawn by you, clearly label all the components, what it needs to be made of, its flavour and its colour.<br /></h5>
            </div>
          </div>
          <div style={{ marginTop: "20px", marginLeft: "500px", paddingBottom: "20px" }} className="col-12 col-md-4"  >
            <UploadCake getImageString={(imageString) => this.getImageString(imageString)} />
          </div>

          <div style={{ display: "flex", justifyContent: "center"}}>
            <div>
              <p style={{ color: "red" }}>{this.state.error}</p>
              <div className="row">
              <p>Deadline date:</p>
              <DatePicker
                selected={this.state.deadline}
                onChange={this.handleChange}
              />
              </div>
              <div className="row">
              <p>Description:</p>
              <div className="form-group" style={{paddingTop:10}}>
                <textarea rows="3" name="description" style={{width:500}} onChange={e => this.onChange(e)} value={this.state.description} type="text" id="display_name" className="form-control input-lg" placeholder="Description" tabindex="3" />
              </div>
              </div>
              
            </div>


          </div>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>

            <div onClick={(e) => { this.onSubmit(e) }} className="col-xs-6 col-md-3"><input style={{ textAlign: "centre", paddingBottom: "40px", marginBottom: "40px" }} type="submit" value="Submit" className="btn btn-primary btn-block btn-lg" tabindex="7" />
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(Uploading);