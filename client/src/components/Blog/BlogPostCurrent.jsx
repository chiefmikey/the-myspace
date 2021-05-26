import React from 'react';
import propTypes from 'prop-types';

const BlogPostCurrent = ({ currentPost }) => (
  <div id="blog-current-post">
    <div id="blog-current-post-title">
      <h3>
        {currentPost.title}
      </h3>
    </div>
    <div id="blog-current-post-content">
      {currentPost.content}
    </div>
  </div>
);

BlogPostCurrent.defaultProps = {
  currentPost: {},
};

BlogPostCurrent.propTypes = {
  currentPost: propTypes.oneOfType([propTypes.object]),
};

export default BlogPostCurrent;
