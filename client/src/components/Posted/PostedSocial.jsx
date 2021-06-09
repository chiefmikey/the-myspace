import React from 'react';
import propTypes from 'prop-types';

const PostedSocial = ({ currentPost }) => (
  <div id="posted-current-post-share">
    Share:
    {' '}
    <div className="text-button">tweeter</div>
    {' | '}
    <div className="text-button">fakbook</div>
  </div>
);

PostedSocial.defaultProps = {
  currentPost: {},
};

PostedSocial.propTypes = {
  currentPost: propTypes.oneOfType([propTypes.object]),
};

export default PostedSocial;
