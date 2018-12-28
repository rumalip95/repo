import React, { Component } from 'react';
import DropZone from "react-dropzone";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { cakeProvidersCakeData } from '../components/serviceprovider/CakeProvidersCakeData';
import CakeProvidersCakeCard from '../components/serviceprovider/CakeProvidersCakeCard';
import ShopNavbar from '../components/nav_bar/ShopNavbar'
import Footer from '../components/footer/Footer'
import DatePicker from "react-datepicker";
import { withRouter } from "react-router-dom"
import UploadCakeProviderCake from '../components/uploadcake/UploadCakeProviderCake.js'
import Uploading from "./Uploading"
import { cakeData } from '../components/order/UploadedImageOrderData';
import UploadedImageOrderCard from '../components/order/UploadedImageOrderCard';
import { cakedCakeData } from '../components/cakeCompanies/CakedCakesData';
import CompanyCard from '../components/cakeCompanies/CompanyCard';
import { connect } from "react-redux"
import { loadCakes } from "../redux/actions/ShopsActions"


class CakeProviderHome extends Component {




    constructor(props) { //for the uploading new cake images
        super(props);

        this.handleChange = this.handleChange.bind(this);


        this.uploadStatus = {
            content: (
                <div className="uploadPic hovarable hoverRed greyButton" style={{ maxWidth: '170px', textAlign: 'center', borderRadius: '7px', padding: '20px' }}>
                    <i style={{ padding: '20px' }} className="fa fa-plus fa-3x"></i>
                    <div style={{ textAlign: 'center' }}>
                        <p>Upload a new cake image</p>
                    </div>
                </div>
            ),

            upload: (
                <div className="uploadPic hovarable hoverRed greyButton" style={{ maxWidth: '170px', textAlign: 'center', borderRadius: '7px', padding: '20px', borderColor: '#e8232d' }}>
                    <i style={{ padding: '20px', height: '100%', color: '#e8232d' }} className="fa fa-check fa-3x"></i>
                    <div style={{ textAlign: 'center', color: '#e8232d' }}>
                        <p>Drop Image Here</p>
                    </div>
                </div>
            ),
            fail: (
                <div className="uploadPic hovarable hoverRed greyButton" style={{ maxWidth: '170px', textAlign: 'center', borderRadius: '7px', padding: '20px' }}>
                    <i style={{ padding: '20px' }} className="fas fa-check fa-3x"></i>
                    <div style={{ textAlign: 'center' }}>
                        <p>Not supported</p>
                    </div>
                </div>
            )
        }

        this.state = {
            name: "",
            uploadedDate: new Date(),
            text: "",
            image: "",
            error: "",
            title: "",
            weight: "",
            price: "",
            isImageUploading: false,
            disabled: false,
            show: this.uploadStatus.content,
            message:""

        };


    }

    cakeRenderedArray = (data) => {
        let a = this.props.location.pathname.split("/")
        let userName = a[a.length - 1]
        return data.map(ele => {
            return (
                <CompanyCard
                    key={ele.id}
                    to={"/CakeProviderHome/" + userName + "/" + ele._id}
                    title={ele.title}
                    text={ele.text}
                    buttonText={"Buy Cake"}
                    image={ele.image}
                />
            )
        })
    }


    handleChange(date) {
        this.setState({
            uploadedDate: date
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
            this.props.socket.emit("Uploading Cake Image", { title: this.state.title, image: this.state.image, text: this.state.text, weight: this.state.weight, price: this.state.price });
        }
        else {
            this.setState({ error: "Please Upload An Image" })
        }
    }



    onDrop = (acceptedFiles, rejectedFiles) => {
        if (acceptedFiles.length > 0) {
            const id = Date.now();
            const fileToUpload = acceptedFiles[0];

            const uploadImage = (
                <div style={{ position: 'relative', minWidth: '100px', minHeight: '100px' }}>
                    <img
                        style={{
                            width: '100%',
                            height: '100%',
                            overflow: "hidden",
                            filter: 'grayscale(100%)',
                            opacity: '0.8'
                        }}
                        src={fileToUpload.preview}
                        alt=''
                    />
                </div>
            )
            this.setState({
                show: uploadImage,
            })
        }


        if (rejectedFiles.length > 0) {
            this.setState({
                show: (
                    <div className="uploadPic hovarable hoverRed greyButton" style={{ maxWidth: '170px', textAlign: 'center', borderRadius: '7px', padding: '20px' }}>
                        <i style={{ padding: '20px' }} className="fa fa-plus fa-3x"></i>
                        <div style={{ textAlign: 'center' }}>
                            <p>File unsupported</p>
                        </div>
                    </div>
                )
            })
        }

    }

    cakeProviderCardRender = () => {
        return cakeProvidersCakeData.map(ele => {
            return (
                <CakeProvidersCakeCard
                    key={ele.id}
                    title={ele.title}
                    uploadedDate={ele.uploadedDate}
                    expiryDate={ele.expiryDate}
                    text={ele.text}
                    buttonText={ele.buttonText}
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
    changeMessage=(message)=>{
        this.setState({
          message
        })
      }

    componentDidMount() {
        this.props.socket.on("Uploaded Cake Image From Shop Saved", () => {
            window.location.reload()
        })

        this.props.socket.on("Uploaded Cake Image From Shop Failed", () => {
            this.setState({ error: "Error" })
        })


        this.props.socket.on("YOUR_CAKE_WAS_SUCCESSFULLY_UPLOADED",()=>{
            this.changeMessage("YOUR_CAKE_WAS_SUCCESSFULLY_UPLOADED")
           })
       
       
           this.props.socket.on("SAVE_ERROR",()=>{
            this.changeMessage("SAVE_ERROR")
            })

        let a = this.props.location.pathname.split("/")
        let userName = a[a.length - 1]


        this.props.loadCakes(userName)
    }






    render() {
        var cakeProvidersCakeRenderedArray = this.renderToRow(this.cakeProviderCardRender());
        console.log(this.state.message)
        return (
            <div>
                <div>
                    <img className="logo" src="/dependencies/pics/newlogo2.png" />
                    <ShopNavbar />
                </div>
                <div style={{ textAlign: "center", paddingTop: 5, fontFamily: 'Sofia' }}>
                    <h1><b>Caked Cakes</b></h1>
                </div>

                <div className="col-md-12 " style={{ paddingTop: 15, fontFamily: 'Sofia' ,textAlign:"center"}}><h4><b>To add a new cake to display to customers, upload a cake here and fill in the text areas accordingly.</b></h4></div>



                <div className="row">
                    <div className="col-6 offset-3" id="backgroundMiddle" className="col-md-10 col-12 offset-md-1">
                        <div id="serviceProvider" >
                            <div className="row " style={{ paddingLeft: 300, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ marginTop: "20px", paddingBottom: "20px" }} className="col-4 col-md-6 offset-3"  >
                                    <UploadCakeProviderCake getImageString={(imageString) => this.getImageString(imageString)} />
                                    <p style={{ color: "red" }}>{this.state.error}</p>

                                </div>
                                <input type="text" class="form-control" style={{ width: 100, marginLeft: 300 }} onChange={e => this.onChange(e)} value={this.state.title} placeholder="Title" name="title" />

                                <div className="form-group">
                                    <textarea rows="3" name="text" onChange={e => this.onChange(e)} value={this.state.text} type="text" id="display_name" style={{ width: 400, marginLeft: 150 }} className="form-control input-lg" placeholder="Description" tabindex="3" />
                                </div>
                                <div className="col-6 col-md-6 " style={{ width: 200, marginLeft: 250 }}>
                                    <input type="text" class="form-control" onChange={e => this.onChange(e)} value={this.state.weight} placeholder="Weight" name="weight" />
                                    <input type="text" class="form-control" onChange={e => this.onChange(e)} value={this.state.price} placeholder="Price" name="price" />

                                </div>
                                <p>{this.state.message}</p>
                                <div onClick={(e) => { this.onSubmit(e) }} style={{ alignItems: "center", width: 150, height: 100, marginTop: 10, marginLeft: 275 }} className="col-xs-6 col-md-4"><input style={{ textAlign: "centre", paddingBottom: "40px", marginBottom: "40px" }} type="submit" value="Submit" className="btn btn-primary btn-block btn-lg" tabindex="7" />
                                </div>
                            </div>



                            <div className="col">
                                {this.renderToRow(this.cakeRenderedArray(this.props.cakesData))}
                            </div>



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

const mapStateToProps = (state) => {
    return { cakesData: state.shops.cakes }
}

const mapDispatchToProps = {
    loadCakes: loadCakes
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CakeProviderHome));