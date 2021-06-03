import React from 'react';
import propTypes from 'prop-types';

import PostedPosts from './PostedPosts';

const PostedPostsList = ({
  history, currentUser, selectPost, currentPost, highlightPost,
}) => {
  const sortedPosts = currentUser.postedPosts
    ? currentUser.postedPosts.sort((a, b) => b[0] - a[0])
    : [];
  return currentUser.postedPosts
    ? (
      <div id="posted-list">
        <div id="posted-list-name">
          <h5>
            {currentUser.descriptionName}
            &apos;s Posts
          </h5>
        </div>
        <div id="posted-post-area">
          <PostedPosts
            sortedPosts={sortedPosts}
            selectPost={selectPost}
            currentPost={currentPost}
            highlightPost={highlightPost}
            history={history}
          />
        </div>
      </div>
    )
    : <></>;
};

PostedPostsList.defaultProps = {
  history: {},
  currentUser: {},
  currentPost: [],
  highlightPost: '',
  selectPost: () => {},
};

PostedPostsList.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
  currentPost: propTypes.oneOfType([propTypes.array]),
  highlightPost: propTypes.string,
  selectPost: propTypes.func,
};

export default PostedPostsList;
