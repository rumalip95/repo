import React, { Component } from 'react';
import DropZone from "react-dropzone";
import 'font-awesome/css/font-awesome.min.css';
import { renderUploadImage } from '../../image_compressor/ImageCompressor';


class UploadCake extends Component {
  constructor (props){
    super(props);
    
      this.uploadStatus = {
        content : (
            <div className="uploadPic hovarable hoverRed greyButton" style={{maxWidth : '170px',textAlign:'center',borderRadius: '7px', padding: '20px'}}>
                <i style={{padding: '20px'}} className="fa fa-plus fa-3x"></i>
                <div style={{textAlign: 'center'}}>
                    <p>Upload an image</p>
                </div>
            </div>
        ),

        upload: (
            <div className="uploadPic hovarable hoverRed greyButton" style={{maxWidth : '170px',textAlign:'center',borderRadius: '7px', padding: '20px', borderColor: '#e8232d'}}>
                <i style={{padding: '20px', height: '100%',color: '#e8232d'}} className="fa fa-check fa-3x"></i>
                <div style={{textAlign: 'center', color: '#e8232d'}}>
                    <p>Drop Image Here</p>
                </div>
            </div>
        ),
        fail: (
            <div className="uploadPic hovarable hoverRed greyButton" style={{maxWidth : '170px',textAlign:'center',borderRadius: '7px', padding: '20px'}}>
                <i style={{padding: '20px'}} className="fas fa-check fa-3x"></i>
                <div style={{textAlign: 'center'}}>
                    <p>Not supported</p>
                </div>
            </div>
        )
    }

    this.state={
      isImageUploading:false,
      disabled:false,
      show: this.uploadStatus.content,
    }
  }

  onDrop=(acceptedFiles,rejectedFiles)=>{
    if(acceptedFiles.length > 0){
      const id = Date.now();
      const fileToUpload = acceptedFiles[0];

      renderUploadImage(fileToUpload,id).then(image => { //converting blob to a base64 string and uploading
          
          let reader=new FileReader();
          reader.readAsDataURL(image);
          reader.onloadend=()=>{
             let base64data=reader.result;
             this.props.getImageString(base64data)
             
          }
      })

      const uploadImage = (
        <div style={{position: 'relative', minWidth: '100px', minHeight: '100px'}}>
            <img 
                style={{
                    width: '100%',
                    height: '100%',
                    overflow: "hidden", 
                    opacity: '0.8'
                }} 
                src={fileToUpload.preview} 
                alt=''
            />
        </div>
      )
      this.setState({
        show:uploadImage,
      })
    }


    if(rejectedFiles.length > 0){
      this.setState({
          show: (
              <div className="uploadPic hovarable hoverRed greyButton" style={{maxWidth : '170px',textAlign:'center',borderRadius: '7px', padding: '20px'}}>
                  <i style={{padding: '20px'}} className="fa fa-plus fa-3x"></i>
                  <div style={{textAlign: 'center'}}>
                      <p>File unsupported</p>
                  </div>
              </div>
          )
      })
  }

  }

  

  render() {
    return (
      
        // <div id="upload" className="row" >
        // <img className="downloadLogo" src="./dependencies/pics/downloadSign.png"/>
        // <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'></link>
        //         <form method="post" action="#" id="#">
        //               <div className="form-group files">
        //                 <label>Upload Your File </label>
        //                 <input type="file" className="form-control" multiple=""/>
        //                 <div style={{paddingTop : 20,color:"#ff1493"}}>
        //                   or Drag It Here
        //                 </div>
        //               </div>
        //         </form>    
            
        //   </div>
        
    
      <div style={{display:'flex',flexDirection:'column'}}>
        <DropZone multiple={false} maxSize={4*1024*1024} disabled={this.state.disabled} onDrop={this.onDrop} className="dropzone" accept ="image/jpeg,image/png">
        {({isDragActive,isDragReject})=>{
          if (isDragActive && !this.state.isImageUploading){
            return this.uploadStatus.upload;
          }
          if (isDragReject) {
              return this.uploadStatus.fail;
          }
          return this.state.show;
        }}
        </DropZone>
      </div>
    );
  }
}

export default UploadCake;