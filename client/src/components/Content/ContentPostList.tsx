import propTypes from 'prop-types';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

import ContentPosts from './ContentPosts';

const ContentPostsList = ({
  history,
  currentUser,
  selectPost,
  currentPost,
}) => {
  const sortedPosts = currentUser.contentPosts
    ? currentUser.contentPosts.sort((a, b) => b._id - a._id)
    : [];
  return currentUser.contentPosts ? (
    <div id="content-list">
      <h5 id="content-list-name">
        <LinesEllipsis
          text={`${currentUser.description.firstName} `}
          ellipsis="... "
          basedOn="letters"
          component="span"
        />
        <span id="content-list-name-text">&apos;s Posts</span>
      </h5>
      <div id="content-post-area">
        <ContentPosts
          sortedPosts={sortedPosts}
          selectPost={selectPost}
          currentPost={currentPost}
          currentUser={currentUser}
          history={history}
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

ContentPostsList.defaultProps = {
  history: {},
  currentUser: {},
  currentPost: {},
  selectPost: () => {},
};

ContentPostsList.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
  currentPost: propTypes.oneOfType([propTypes.object]),
  selectPost: propTypes.func,
};

export default ContentPostsList;
