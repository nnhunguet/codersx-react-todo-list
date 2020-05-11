import React, { Component } from 'react';

class FormLogin extends Component{
  render() {
    return (
      <div className="wrap-form">
        <form className="form-login">
          <div className="input-user wrap-input">
            <label for="username">Username</label>
            <div>
              <input type="text" className="input" id="username" value={this.props.email}></input>
            </div>
          </div>
          <div className="input-password wrap-input">
            <label for="password">Password</label>
            <div>
              <input type="password" className="input" id="password" placeholder="*****************************"></input>
            </div>
          </div>
          <div className="btn">
            <button type="submit">
              Signup to Coders-X
            </button>
          </div>
          <div className="check-box"> 
            <input type="checkbox" id="keep-signed-in" name="keep-signed-in"></input>
            <label for="keep-signed-in">Keep me signed in</label>
          </div>
          <div className="wrap-forgot"> 
            <a className="forgot-name forgot" href="#">
              Forgot username?
            </a>
            <a className="forgot-password forgot" href="#">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    )
  }
}

export default FormLogin