import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Success() {
  return (
    <div className="row">
      <div className="col-md-12">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
          UPLOAD IMG 
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">

          <div className="navbar-end">
            <div className="navbar-button">
                <a href="/register" className="btn btn-nav">
                  <strong>Register</strong>
                </a>
                <a href="/login" className="btn btn-nav">
                <strong>Log In </strong>
                </a>
              
            </div>
          </div>
        </div>
      </nav>
  </div>
  <div className="col-md-12">
 
        <h1>Welcome!</h1>
        <p>You have successfully registered a new account.</p>
        <p>We've sent you a email. Please click on the confirmation link to verify your account.</p>

    </div>
    </div>
  )
}