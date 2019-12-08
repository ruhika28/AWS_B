import React, { Component } from 'react';
 	
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth } from "aws-amplify";
import axios from "axios";

class Welcome extends Component{
	 state = {
		        username:""
	         } 
		 async componentDidMount() {
	      const info = await Auth.currentUserInfo();
	      this.setState({username:info.username});
	       }	
	
	 render(){ 
	
  return (
	         <div className="row">
      <div className="col-md-12 ">
      
      <link rel="stylesheet" 
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
          crossorigin="anonymous"></link>
     
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
          UPLOAD IMG 
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">

          <div className="navbar-end">
            <div className="navbar-button">
                <a href="/card" className="btn btn-nav">
                <strong><i class="fas fa-upload"> </i>Upload img </strong>
                </a>
                <button type="button" class="btn btn-nav" onClick={this.signOut}><i class="fas fa-power-off">&nbsp;</i>Sign Out</button>
              
            </div>
          </div>
        </div>
      </nav>
  </div>
  <div className="col-md-12">
 
        <h1>Welcome! {this.state.username}</h1>
        <p>You have successfully registered a new account.</p>
        <p>We've sent you a email. Please click on the confirmation link to verify your account.</p>

    </div>
    </div>
  );
  
	 }
}

export default Welcome;