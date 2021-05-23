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
      <BlogPosts blogPosts={currentUser.blogPosts} />
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
