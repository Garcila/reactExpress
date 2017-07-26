import React from 'react';

import HeaderJs from './common/HeaderJs';

const Secret = (props) => {
  console.log('from secret ', props);
  const { auth, history } = props;
  return (
    <div>
        <HeaderJs
            auth={auth}
            history={history} 
        />  
      <h1>you found the Secret Page</h1>
    </div>
  );
};

export default Secret;
