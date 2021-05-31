import React from 'react';
import propTypes from 'prop-types';

const BlogPostCurrent = ({ currentPost }) => {
  if (currentPost[0] < 0) {
    return (
      <div id="blog-current-post">
        <div id="blog-current-post-title">
          <h5>
            this user has no blog posts
          </h5>
        </div>
        <div id="blog-current-post-content">
          tell them to post something lol
        </div>
      </div>
    );
  }
  return (
    <div id="blog-current-post">
      <div id="blog-current-post-title">
        <h5>
          {currentPost[1]}
        </h5>
      </div>
      <div id="blog-current-post-content">
        {currentPost[2]}
      </div>
    </div>
  );
};

BlogPostCurrent.defaultProps = {
  currentPost: [],
};

BlogPostCurrent.propTypes = {
  currentPost: propTypes.oneOfType([propTypes.array]),
};

export default BlogPostCurrent;
