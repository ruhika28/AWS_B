import React, { Component } from 'react';
import { Auth } from 'aws-amplify'
import Validate from "../authentication/FormValidation";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      email: "",
      password: "",
      confirmpassword: "",
      credit_card:"",
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
}
      clearErrorState = () => {
        this.setState({
          errors: {
            cognito: null,
            blankfield: false,
            passwordmatch: false
          }
        });
      }
      signupfnc = async () => {
        const{username,email,password}=this.state;
        const signupres = await Auth.signUp({
          username: username,
          password: password,
          attributes: {
              email: email
          }
      });
      console.log(signupres);
      }
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
        
       this.signupfnc()
        .then(() => {
          this.props.history.push("/login");
        })
        .catch((err) => console.log(`Error signing up: ${ err }`))
      };
      onInputChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    
        Auth.signOut()
          .then(data => console.log(data))
          .catch(err => console.log(err));
      }
  
render(){
return(
  <div>
 
    <form id="form_signup" onSubmit={this.handleSubmit}>
    <div className="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr/>
      
      <link rel="stylesheet" 
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
          crossorigin="anonymous"></link>
     
      <label htmlFor="username"><b>User Name</b></label>
      <input type="text" placeholder="Enter Username" name="username" id="username" value={this.state.username} className='form-control' onChange={this.onInputChange} required />
      
      
      <label htmlFor="email"><b>Email</b></label>
      <input type="email" placeholder="name@example.com" name="email" id="email" value={this.state.email} className='form-control' onChange={this.onInputChange} required/>
  
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id= "password" value={this.state.password} className='form-control' onChange={this.onInputChange} required/>
  
      <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
      <input className='form-control' type="password" placeholder="Repeat Password" name="psw-repeat" id="confirmpassword" value={this.state.confirmpassword}
                  onChange={this.onInputChange} required/>
      
      
     <button type="submit" className="registerbtn" onSubmit={this.handleSubmit}>Register</button>
     <hr/>
   
    </div>
  </form>
  
  <button type="button" class="btn btn-info"
  onClick={() => Auth.federatedSignIn({provider: 'Facebbook'})}
><i class="fab fa-facebook"/>Sign In with Facebook</button>&nbsp;
  <button type="button" class="btn btn-info"
  onClick={() => Auth.federatedSignIn({provider: 'Google'})}
><i class="fab fa-google"/>Sign In with Google</button>
<hr/>
<button type="button" class="btn btn-danger" onClick={this.checkUser}>Check User</button> &nbsp;&nbsp;
<button type="button" class="btn btn-danger" onClick={this.signOut}>Sign Out</button>
    </div>
);
}
}
export default Register;

