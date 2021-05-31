import React from 'react';
import propTypes from 'prop-types';

import BlogUpdates from './BlogUpdates';

const Subscribe = ({ currentUser, closeSubscribeWindow }) => (
  <div id="subscribe">
    <div id="subscribe-box">
      <div id="subscribe-name">
        <h5>
          Subscribe
        </h5>
      </div>
      <div
        id="subscribe-close"
        onClick={closeSubscribeWindow}
        onKeyPress={closeSubscribeWindow}
        tabIndex={0}
        role="button"
      >
        &times;
      </div>
      <BlogUpdates currentUser={currentUser} />
    </div>
  </div>
);

Subscribe.defaultProps = {
  currentUser: {},
  closeSubscribeWindow: () => {},
};

Subscribe.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
  closeSubscribeWindow: propTypes.func,
};

export default Subscribe;
