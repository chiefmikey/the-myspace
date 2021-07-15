import React from 'react';
import propTypes from 'prop-types';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

const Landing = ({ history }) => (
  <div id="landing">
    <div id="landing-main">
      <div id="landing-main-logo">
        <h5>
          themyspace.org
        </h5>
      </div>
      <h1>
        GET IN MY BELLY
      </h1>
      <Router history={history}>
        <div id="landing-action">
          <Link
            to="/"
          >
            Sign Up
          </Link>
          {' | '}
          <Link
            to="/"
          >
            Log In
          </Link>
        </div>
      </Router>
    </div>
  </div>
);

Landing.defaultProps = {
  history: {},
};

Landing.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(Landing);
