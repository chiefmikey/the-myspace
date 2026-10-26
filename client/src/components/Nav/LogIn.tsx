import propTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import track from '../../telemetry';

const LogIn = ({ showLogIn }) => (
  <div id="login">
    Please log the funk in:
    <input
      type="email"
      id="login-email"
      placeholder="email"
    />
    <input
      type="password"
      id="login-password"
      placeholder="password"
    />
    <span
      onClick={() => {
        track('login_closed');
        showLogIn('closeLogIn');
      }}
      onKeyPress={() => showLogIn('closeLogIn')}
      tabIndex={0}
      role="button"
    >
      X
    </span>
  </div>
);

LogIn.defaultProps = {
};

LogIn.propTypes = {
};

export default LogIn;
