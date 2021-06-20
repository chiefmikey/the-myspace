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

const Header = ({
  history, getCurrentUser, activeUser, showLogIn,
}) => (
  <div id="header">
    <Router history={history}>
      {activeUser._id && activeUser._id >= 0
        ? (
          <div id="header-info">
            <Link
              to="/"
            >
              <span className="a-button">Log Out</span>
            </Link>
          </div>
        )
        : (
          <div id="header-info">
            <Link
              to="/"
            >
              <span className="a-button">Sign Up</span>
            </Link>
            {' | '}
            <span className="a-button" onClick={() => showLogIn('openLogIn')}>Log In</span>
          </div>
        )}

      <Link
        to="/chiefmikey"
        onClick={() => {
          getCurrentUser();
        }}
      >
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
  getCurrentUser: () => {},
};

Header.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  getCurrentUser: propTypes.func,
};

export default withRouter(Header);
