import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth } from "aws-amplify";
import axios from "axios";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Validate from "../authentication/FormValidation";
export default class Card extends React.Component  {
  state = {
     cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    username:''
  };	
  
  getNumber(number){
	  this.setState({number})
	  console.log(JSON.number(this.state));
	}
  
  async componentDidMount() {
      const info = await Auth.currentUserInfo();
      this.setState( {username:info.username});
       }
  
      cardnumpass = async event => {
      event.preventDefault();
      console.log("here");
      await axios.post('https://rnmsm3g637.execute-api.us-east-1.amazonaws.com/dev/credit',this. getNumber,{headers: { "Content-Type":'application/json'}})
      .then(function (res) {
        console.log("here isthe validation");
        console.log(res);
        		     
      })
      .catch(function (error) {
        console.log(error)
      });
  

      };
  
      handleSubmit = async event => {
          event.preventDefault();
          // Form validation
          this.clearErrorState();
          const error = Validate(event, this.setState);
          if (error) {
            this.setState({
              errors: { ...this.state.errors, ...error }
            });
          }
          
         this.submit()
          .then(() => {
            this.props.history.push("/upload");
          })
          .catch((err) => console.log(`Error signing up: ${ err }`))
        };
      
      
      
  handleInputFocus = (e) => {
	    this.setState({ focus: e.target.name });
	  }
	  
	  handleInputChange = (e) => {
	    const { name, value } = e.target;
	    
	    this.setState({ [name]: value });
	  }	
render(){ 
	return (
      <div className="col-md-12 ">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
          ENTER  YOUR CARD DETAILS HERE 
          </a>
        </div>
        
        <div id="navbarBasicExample" className="navbar-menu">
        
        <div className="navbar-end">
        
        <a className="navbar-brand" href="#">
         Logged on as  {this.state.username} </a>
        <a></a>  <div className="navbar-button">
        
          </div>
        </div>
      </div>
        
        
        
      </nav>
 <div className="PaymentForm"><br/><br/>
  <Cards 
    cvc={this.state.cvc}
    expiry={this.state.expiry}
    focus={this.state.focus}
    name={this.state.name}
    number={this.state.number}
    username={this.state.username}
  /><br/>
  <form  method="post">
  	<input
      type="tel"
      name="number"
      placeholder="Card Number"
      onChange={this.handleInputChange}
      onFocus={this.handleInputFocus}
  	 onDone={ this.getNumber.bind(this) } 
    /> <br/><br/>
  	<input 
    type="text"
    name="name"
    placeholder="your name"
    onChange={this.handleInputChange}
    onFocus={this.handleInputFocus}
  /> <br/> 
  	<input
    type="number"
    name="expiry"
    placeholder="Expiry mm/yy"
    onChange={this.handleInputChange}
    onFocus={this.handleInputFocus}
  />  <br/><br/>
  	<input
    type="number"
    name="cvc"
    placeholder="CVC"
    onChange={this.handleInputChange}
    onFocus={this.handleInputFocus}
  /> <br/><br/>
  	&nbsp;<button type="button" class="btn btn-dark" onSubmit={this.handleSubmit}>SUBMIT </button>&nbsp;&nbsp;
  	

 </form>
</div>
</div>			
	
	);
  
	 }
}
	