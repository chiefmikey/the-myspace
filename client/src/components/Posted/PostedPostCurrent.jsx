import React from 'react';
import propTypes from 'prop-types';

const PostedPostCurrent = ({ currentPost }) => {
  if (currentPost._id < 0) {
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
          {currentPost.title}
        </h5>
      </div>
      <div id="posted-current-post-content">
        {currentPost.content}
      </div>
    </div>
  );
};

PostedPostCurrent.defaultProps = {
  currentPost: {},
};

PostedPostCurrent.propTypes = {
  currentPost: propTypes.oneOfType([propTypes.object]),
};

export default PostedPostCurrent;
