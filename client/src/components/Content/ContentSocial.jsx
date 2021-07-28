import React from 'react';
import propTypes from 'prop-types';

const ContentSocial = ({ currentPost }) => (
  <div id="content-current-post-share">
    Share: <div className="a-button">tweeter</div>
    {' | '}
    <div className="a-button">fakbook</div>
  </div>
);

ContentSocial.defaultProps = {
  currentPost: {},
};

ContentSocial.propTypes = {
  currentPost: propTypes.oneOfType([propTypes.object]),
};

export default ContentSocial;
