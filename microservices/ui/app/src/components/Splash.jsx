import React, { Component } from 'react';

class Splash extends Component {

  render(){
    return(
      <div>
        <div className="splash-headerbar">
          <div className="splash-title">

          </div>
        </div>

      <div>
        <h1 className="splash-header">GET YOUR GAME FACE ON</h1>
        <div className="splash-login">
          <div className="splash-login-left">
              <a className="splash-login-google"
                  type="button"
                  href="">
                  Log in with Google
              </a>
              <a className="splash-login-google"
                  type="button"
                  href="">
                  Log in with Facebook
              </a>
              <a className="splash-login-google"
                  type="button"
                  href="">
                  Log in with Github
              </a>
          </div>

          <div className="splash-login-right">
            <h3 className="splash-login-right-header">SIGN IN AS A GUEST</h3>

        </div>
        </div>
      </div>

    </div>
    );
  }

}
