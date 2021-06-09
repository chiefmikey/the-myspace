import React from 'react';
import propTypes from 'prop-types';

import PostedPosts from './PostedPosts';

const PostedPostsList = ({
  history, currentUser, selectPost, currentPost, highlightPost,
}) => {
  const sortedPosts = currentUser.postedPosts
    ? currentUser.postedPosts.sort((a, b) => b._id - a._id)
    : [];
  return currentUser.postedPosts
    ? (
      <div id="posted-list">
        <div id="posted-list-name">
          <h5>
            {currentUser.description.name}
            &apos;s Posts
          </h5>
        </div>
        <div id="posted-post-area">
          <PostedPosts
            sortedPosts={sortedPosts}
            selectPost={selectPost}
            currentPost={currentPost}
            currentUser={currentUser}
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
  currentPost: {},
  highlightPost: -1,
  selectPost: () => {},
};

PostedPostsList.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
  currentPost: propTypes.oneOfType([propTypes.object]),
  highlightPost: propTypes.number,
  selectPost: propTypes.func,
};

export default PostedPostsList;
