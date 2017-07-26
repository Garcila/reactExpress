import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../App.css';

class HeaderJs extends Component {
    // Auth0 methods to login, logout and goTo
    goTo(route) {
      this.props.history.replace(`/${route}`)
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
      const { isAuthenticated }= this.props.auth;

    return (
        <Header className='header' size='huge'>
          <Link className='title-link' size='huge' to='/'>
            Faces...
          </Link>
          <Header.Subheader className='subtitle' >
            My family doesn\'t get
          </Header.Subheader>
          <Button
            onClick={this.goTo.bind(this, '')}
          >
            Home
          </Button>
            {
              !isAuthenticated() && (
                  <Button
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          <Header.Subheader className='moreFaces' onClick={changeView}>
            {go}
          </Header.Subheader>
        </Header> 
    );
  }
};

// const HeaderJs = (props) => {
//   const { changeView, go } = props;
//   return (
//     <Header className='header' size='huge'>
//       <Link className='title-link' size='huge' to='/'>
//         Faces...
//       </Link>
//       <Header.Subheader className='subtitle' >
//         My family doesn\'t get
//       </Header.Subheader>
//       <Link to='/Secret'>8</Link>
//       <Header.Subheader className='moreFaces' onClick={changeView}>
//         {go}
//       </Header.Subheader>
//     </Header>
//   );
// };

export default HeaderJs;