/* eslint-env browser */

import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
  import App from './App';
import Secret from './Secret';
import './index.css';

const Root = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/secret' component={Secret} />
      </div>
    </Router>
  );
};

render(
  <Root />,
  document.getElementById('root')
);
