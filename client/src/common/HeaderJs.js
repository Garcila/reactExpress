import React, { Component } from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../App.css';

class HeaderJs extends Component {
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
    const { changeView, go } = this.props;

    // Auth0 method to check if user is authenticated
    const { isAuthenticated } = this.props.auth;

    return (
      <Header className="header" size="huge">
        <Link className="title-link" size="huge" to="/">
          Faces...
        </Link>
        <Header.Subheader className="subtitle">
          My family doesn't get
        </Header.Subheader>

        <div>
          {!isAuthenticated() &&
            <Icon bordered color="teal" name="sign in" size="small" 
            onClick={this.login.bind(this)} />}
          {isAuthenticated() &&
            <Icon size="mini" color="red" name="sign out" size="small"
            onClick={this.logout.bind(this)}/>}
        </div>

        <div className="moreFaces" onClick={changeView}>
          {go}
        </div>
      </Header>
    );
  }
}

export default HeaderJs;
