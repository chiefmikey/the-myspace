import propTypes from 'prop-types';
import React from 'react';
import Img from 'react-cool-img';
import {Link} from 'react-router-dom';

import errorImage from '../../../public/img/404.jpeg';
import loadingImage from '../../../public/img/420.jpeg';
import wolfebytew from '../../../public/img/wolfebyte-w.png';
import track from '../../telemetry';

const Header = ({ getCurrentUser, activeUser, showLogIn }) => (
  <div id="header">
          {activeUser._id && activeUser._id >= 0 ? (
        <div id="header-info">
          <Link to="/">
            <span className="a-button">Log Out</span>
          </Link>
        </div>
      ) : (
        <div id="header-info">
          <Link
            to="/"
            onClick={() => track('signup_clicked')}
          >
            <span className="a-button">Sign Up</span>
          </Link>
          {' | '}
          <span
            className="a-button"
            onClick={() => {
              track('login_opened');
              showLogIn('openLogIn');
            }}
            onKeyPress={() => showLogIn('openLogIn')}
            tabIndex={0}
            role="button"
          >
            Log In
          </span>
        </div>
      )}

      <Link
        to="/wolfe"
        onClick={() => {
          track('header_profile_clicked');
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
  </div>
);

Header.defaultProps = {
  getCurrentUser: () => {},
};

Header.propTypes = {
  getCurrentUser: propTypes.func,
};

export default Header;
