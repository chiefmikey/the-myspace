import propTypes from 'prop-types';
import React from 'react';
import { Router, Link, withRouter } from 'react-router-dom';

const LogIn = ({ history, showLogIn }) => (
  <div id="login">
    Please log the funk in:
    <input type="email" id="login-email" placeholder="email" />
    <input type="password" id="login-password" placeholder="password" />
    <span
      onClick={() => showLogIn('closeLogIn')}
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
