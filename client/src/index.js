/* eslint-env browser */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Secret from './Secret';
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
//============================================^

const Root = () =>
  //===========================================================
  <Router history={history} component={App}>
    <div>
      {/* //============================================= */}
      <Route exact path="/" render={props => <App auth={auth} {...props} />} />
      <Route
        path="/secret"
        render={props => {
          handleAuthentication(props);
          return <Secret auth={auth} {...props} />;
        }}
      />

      {/* //==================================================^ */}
      {/* <Route exact path='/' component={App} /> */}
      {/* <Route path='/secret' component={Secret} />  */}
    </div>
  </Router>;

render(<Root />, document.getElementById('root'));
