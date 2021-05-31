import React from 'react';
import propTypes from 'prop-types';

import BlogPosts from './BlogPosts';

const BlogPostsList = ({
  history, currentUser, selectPost, currentPost, highlightPost,
}) => {
  const sortedPosts = currentUser.blogPosts
    ? currentUser.blogPosts.sort((a, b) => b[0] - a[0])
    : [];
  return currentUser.blogPosts
    ? (
      <div id="blog-list">
        <div id="blog-list-name">
          <h5>
            {currentUser.profileName}
            &apos;s Blog Posts
          </h5>
        </div>
        <div id="blogpost-area">
          <BlogPosts
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

BlogPostsList.defaultProps = {
  history: {},
  currentUser: {},
  currentPost: [],
  highlightPost: -1,
  selectPost: () => {},
};

BlogPostsList.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
  currentPost: propTypes.oneOfType([propTypes.array]),
  highlightPost: propTypes.number,
  selectPost: propTypes.func,
};

export default BlogPostsList;
