import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ titleMain, subtitle }) => {

  return (
    <div className="header">
      <Link className="title" to="/">
        {titleMain}
        <div className="sub-title">{subtitle}</div>
      </Link>
    </div>
  );
};

export default Header;