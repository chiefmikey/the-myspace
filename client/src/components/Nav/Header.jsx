import React from 'react';
import Img from 'react-cool-img';

import loadingImage from '../../../public/img/420.jpeg';
import errorImage from '../../../public/img/404.jpeg';
import wolfebytew from '../../../public/img/wolfebyte-w.png';

const Header = () => (
  <div id="header">
    <div id="header-info">
      <span className="text-button">Sign Up</span>
      {' | '}
      <span className="text-button">Login</span>
    </div>
    <div id="header-pic">
      <Img
        id="header-pic-img"
        src={wolfebytew}
        placeholder={loadingImage}
        error={errorImage}
        lazy
        cache
        alt="header banner"
      />
    </div>
  </div>
);

export default Header;
