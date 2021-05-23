import React from 'react';
import propTypes from 'prop-types';

const BlogPostCurrent = ({ currentPost }) => (
  <div id="blog-current-post">
    {currentPost}
  </div>
);

BlogPostCurrent.defaultProps = {
  currentPost: '',
};

BlogPostCurrent.propTypes = {
  currentPost: propTypes.string,
};

export default BlogPostCurrent;
