import React from 'react';
import propTypes from 'prop-types';

const PostedPostCurrent = ({ currentPost }) => {
  if (currentPost[0] < 0) {
    return (
      <div id="posted-current-post">
        <div id="posted-current-post-title">
          <h5>
            this user has no posted posts
          </h5>
        </div>
        <div id="posted-current-post-content">
          tell them to post something lol
        </div>
      </div>
    );
  }
  return (
    <div id="posted-current-post">
      <div id="posted-current-post-title">
        <h5>
          {currentPost[1]}
        </h5>
      </div>
      <div id="posted-current-post-content">
        {currentPost[2]}
      </div>
    </div>
  );
};

PostedPostCurrent.defaultProps = {
  currentPost: [],
};

PostedPostCurrent.propTypes = {
  currentPost: propTypes.oneOfType([propTypes.array]),
};

export default PostedPostCurrent;
