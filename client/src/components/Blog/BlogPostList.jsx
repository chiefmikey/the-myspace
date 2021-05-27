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
    return (
      <div id="blog-list">
        <div id="blog-list-name">
          <h5>
            {currentUser.profileName}
            &apos;s Blog Posts
          </h5>
        </div>
        <div id="blogpost-area">
          <BlogPosts blogPosts={currentUser.blogPosts} />
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
