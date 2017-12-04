import React from 'react';

import Header from './common/Header';
import AddImageForm from './AddImageForm';

const Secret = props => {
  const { auth, history } = props;
  return (
    <div>
      <Header auth={auth} history={history} />
      <AddImageForm AddImage={this.AddImage.bind(this)} />
    </div>
  );
};

export default Secret;
