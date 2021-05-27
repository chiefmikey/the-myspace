import React from 'react';
import propTypes from 'prop-types';

import BlogPosts from './BlogPosts';

class BlogPostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: '',
    };
  }

  render() {
    const { history, currentUser } = this.props;
    const sortedPosts = currentUser.blogPosts
      ? currentUser.blogPosts.sort((a, b) => b[0] - a[0])
      : undefined;
    return (
      <div id="blog-list">
        <div id="blog-list-name">
          <h5>
            {currentUser.profileName}
            &apos;s Blog Posts
          </h5>
        </div>
        <div id="blogpost-area">
          <BlogPosts blogPosts={sortedPosts} />
        </div>
      </div>
    );
  }
}

BlogPostsList.defaultProps = {
  history: {},
  currentUser: {},
};

BlogPostsList.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default BlogPostsList;
