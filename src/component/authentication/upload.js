import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth } from "aws-amplify"; 
import axios from "axios";
import FileBase64 from './react-file-base64.js';
class Upload extends Component{
    state = { 
        username:"",
        email:"",
        files:[],
        result:[]
}
getFiles(files){
  this.setState({ files: files })
  console.log(JSON.stringify(this.state));
}
   async componentDidMount() {
      const info = await Auth.currentUserInfo();
      this.setState( {username:info.username});

       }

    postfile = async event => {
      event.preventDefault();
      console.log("here");
      await axios.post('https://0ig9slcn22.execute-api.us-east-1.amazonaws.com/dev/batch',this.state,{headers: { "Content-Type":'application/json'}})
      .then(function files (response) {
        console.log("here are filenames");
        console.log(response.data);
        var result = response.data.map(({ name }) => name)
        
        
        console.log(result);
        return (<div className="col-md-12">
            
            <a className="navbar-brand" href="/">
             files uploaded {result}
            </a>
            </div>)
        
      })
      .catch(function (error) {
        console.log(error)
      });
};

    render(){
    return(
      
      <div className="row">
      <link rel="stylesheet" 
	          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
	          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
	          crossorigin="anonymous"></link>
        <div className="col-md-12">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
            UPLOAD IMAGE SERVICE
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
  
            <div className="navbar-end">
            
            <a className="navbar-brand" href="/">
             Welcome {this.state.username} &nbsp;<i class="fas fa-user-circle fa-1x"></i>
            </a>
            <a></a>  <div className="navbar-button">
            
              </div>
            </div>
          </div>
        </nav>
    </div>
    <div className="col-md-6 text-center">
           <b>Upload files here</b>
          <form onSubmit={this.postfile}>
          <FileBase64
        multiple={ true }
        onDone={ this.getFiles.bind(this) } />
          <hr/>
          <button type="submit" className="btn btn-success">Upload</button>
          <b>{this.state.username} uploaded{this.state.result} </b>
          </form>
  <div id="filenames">
         

  </div>
      </div>
      </div>
    );
  }
  }
  export default Upload;
