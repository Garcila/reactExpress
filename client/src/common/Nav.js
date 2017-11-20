import React, { Component } from 'react';

import './Nav.css';

class Nav extends Component {
  // Auth0 methods to login, logout and goTo
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    // Auth0 method to check if user is authenticated
    const { isAuthenticated } = this.props.auth;
    const { changeView, go } = this.props;
    return (
      <div className="nav">
        <div>
          {!isAuthenticated() && (
            <div className="log" onClick={this.login.bind(this)} name="sign in">
              Log In / Sign Up
            </div>
          )}
          {isAuthenticated() && (
            <div
              className="log"
              onClick={this.logout.bind(this)}
              name="sign out"
            >
              Log Out
            </div>
          )}
        </div>

        <div className="moreFaces" onClick={changeView}>
          {go}
        </div>
      </div>
    );
  }
}

export default Nav;
