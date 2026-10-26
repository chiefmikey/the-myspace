import propTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => (
  <div id="landing">
    <div id="landing-main">
      <div id="landing-main-logo">
        <h5>themyspace.org</h5>
      </div>
      <h1>GET IN MY BELLY</h1>
              <div id="landing-action">
          <Link to="/">Sign Up</Link>
          {' | '}
          <Link to="/">Log In</Link>
        </div>
    </div>
  </div>
);

Landing.defaultProps = {
};

Landing.propTypes = {
};

export default Landing;
