import React from 'react';
import propTypes from 'prop-types';
import Img from 'react-cool-img';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

import loadingImage from '../../../public/img/420.jpeg';
import errorImage from '../../../public/img/404.jpeg';
import wolfebytew from '../../../public/img/wolfebyte-w.png';

const Header = ({ history }) => (
  <div id="header">
    <div id="header-info">
      <span className="text-button">Sign Up</span>
      {' | '}
      <span className="text-button">Login</span>
    </div>
    <Router history={history}>
      <Link to="/" onClick={() => history.push('/')}>
        <Img
          id="header-pic-img"
          src={wolfebytew}
          placeholder={loadingImage}
          error={errorImage}
          lazy
          cache
          alt="header banner"
        />
      </Link>
    </Router>
  </div>
);

Header.defaultProps = {
  history: {},
};

Header.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(Header);
