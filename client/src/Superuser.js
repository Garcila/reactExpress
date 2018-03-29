import React from 'react';

import Header from './common/Header';
import Nav from './common/Nav';

// import AddImageForm from './AddImageForm';

const Superuser = props => {
  const { auth, history } = props;
  return (
    <div>
      <Header
        titleMain={'1000 faces...'}
        subtitle={"My family doesn't like"}
			/>
      <Nav auth={auth} history={history} />
      <h1>COME AGAIN IN THE FUTURE</h1>
      {/* <AddImageForm AddImage={this.AddImage.bind(this)} /> */}
    </div>
  );
};

export default Superuser;
