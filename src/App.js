
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Register from './component/authentication/register';
import Welcome from './component/authentication/welcome';
import Login from './component/authentication/Login';
import Upload from './component/authentication/upload';
import Card from './component/authentication/PaymentForm';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/welcome" component={Welcome} />
              <Route exact path="/Login" component={Login} /> +
              <Route exact path="/Upload" component={Upload}/>+
              <Route exact path="/Card" component={Card}/>
             </Switch> 
          </div>
        </Router>
      </div>	
    );
  }
}

export default App