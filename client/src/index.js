/* eslint-env browser */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import App from './App';
import './index.css';

//========================================
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const Root = () =>
  <Router history={history} component={App}>
    <div>
      <Route 
        exact path="/" 
        render={props => {
        handleAuthentication(props);
        return <App auth={auth} 
        {...props} />;}} 
      />
      <Route
        path="/superuser"
        render={props => {
          handleAuthentication(props);
          return <App auth={auth} {...props} />;
        }}
      />
    </div>
  </Router>;

render(<Root />, document.getElementById('root'));
