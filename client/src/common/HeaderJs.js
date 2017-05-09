import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../App.css';

const HeaderJs = (props) => {
  const { changeView, go } = props;
  return (
    <Header className='header' size='huge'>
      <Link className='title-link' size='huge' to='/'>
        Faces...
      </Link>
      <Header.Subheader className='subtitle' >
        My family doesn\'t get
      </Header.Subheader>
      <Link to='/Secret'>8</Link>
      <Header.Subheader className='moreFaces' onClick={changeView}>
        {go}
      </Header.Subheader>
    </Header>
  );
};

export default HeaderJs;
