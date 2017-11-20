import React from 'react';

import Header from './common/Header';

const Secret = props => {
  const { auth, history } = props;
  return (
    <div>
      <Header auth={auth} history={history} />
      <h1>you found the Secret Page</h1>
    </div>
  );
};

export default Secret;
