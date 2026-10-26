import propTypes from 'prop-types';
import React from 'react';
import { Router, Link, withRouter } from 'react-router-dom';
import track from '../../telemetry';

const LogIn = ({ history, showLogIn }) => (
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
  history: {},
};

LogIn.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(LogIn);
