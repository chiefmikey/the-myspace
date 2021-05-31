import React from 'react';
import propTypes from 'prop-types';

const BlogSocial = ({ currentPost }) => (
  <div id="blog-current-post-share">
    Share:
    {' '}
    <div className="text-button">tweeter</div>
    {' | '}
    <div className="text-button">fakbook</div>
  </div>
);

BlogSocial.defaultProps = {
  currentPost: [],
};

BlogSocial.propTypes = {
  currentPost: propTypes.oneOfType([propTypes.array]),
};

export default BlogSocial;
