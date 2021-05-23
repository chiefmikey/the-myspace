import React from 'react';
import propTypes from 'prop-types';

import BlogPostList from './BlogPostList';
import BlogPostCurrent from './BlogPostCurrent';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: '',
    };
  }

  render() {
    const { history, currentUser } = this.props;
    const { currentPost } = this.state;
    return (
      <>
        <div id="blog-header">
          <h3>
            {currentUser.profileName}
            &apos;s Blog
          </h3>
        </div>
        <div id="blog">
          <div id="blog-left">
            <BlogPostList currentUser={currentUser} />
          </div>
          <div id="blog-right">
            <BlogPostCurrent currentPost={currentPost} />
          </div>
        </div>
      </>
    );
  }
}

Blog.defaultProps = {
  history: {},
  currentUser: {},
};

Blog.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default Blog;
