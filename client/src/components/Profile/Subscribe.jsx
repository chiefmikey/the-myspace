import React from 'react';
import propTypes from 'prop-types';

import PostedUpdates from './PostedUpdates';

const Subscribe = ({ currentUser, closeSubscribeWindow }) => (
  <div id="subscribe">
    <div id="subscribe-box">
      <div id="subscribe-name">
        <h5>
          Subscribe
        </h5>
        <div
          id="subscribe-close"
          onClick={closeSubscribeWindow}
          onKeyPress={closeSubscribeWindow}
          tabIndex={0}
          role="button"
        >
          &times;
        </div>
      </div>
      <PostedUpdates currentUser={currentUser} />
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
