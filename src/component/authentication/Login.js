import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Validate from "../authentication/FormValidation";
import { Auth } from "aws-amplify";
import 'bootstrap/dist/css/bootstrap.min.css';


class LogIn extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // AWS Cognito integration here
    try {
      await Auth.signIn(this.state.username, this.state.password)
      .then(() => {
        this.props.history.push("/welcome");
      });

    }catch(error) {
      let err = null;
      !error.message ? err = { "message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      });
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (
        
        <div className= "row">
            <div className="col-md-12 text-center">
            <div className="card card-cust">
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
              PLEASE LOGIN
              </a>
            </div>
          </nav>
     <div class="row valign-wrapper">
     <div className="col-md-6 text-center">
                        <form id="login-form"  onSubmit={this.handleSubmit} >
                        <h5 className="card-title cardtitle-cust">LOGIN</h5>
                            <div className="form-group">
                                <input type="text" name="username" id="username" className="form-control inpt-crl" placeholder="Enter your username" value={this.state.username}
                  onChange={this.onInputChange}></input>
                               
                                <input type="password" name="password" id="password" className="form-control inpt-crl" placeholder="Password" value={this.state.password}
                  onChange={this.onInputChange}></input>
                                <input type="submit" name="submit" className="btn btn-cust" value="SUBMIT"></input>
                            </div>
                           
                        </form>
                        <div id="register-link" className="text-center">
                                 <p sytle="text-align:right">New user ?</p>
                                 <span><Link to="/register" >Click to Register</Link></span>
                            </div>
                    </div>

  </div>                 
                </div>
        </div>
</div>
    );
  }
}

export default LogIn;
