import React from 'react';
import propTypes from 'prop-types';

import BlogPosts from './BlogPosts';

const Blog = ({ profileName, blogPosts }) => (
  <div id="blog">
    <div id="blog-name">
      {profileName}
      &apos;s Latest Blog Entry
      {' '}
      [
      <a href="http://wolfebyte.net">Subscribe</a>
      ]
    </div>
    <BlogPosts blogPosts={blogPosts} />
  </div>
);

Blog.defaultProps = {
  profileName: '',
  blogPosts: [],
};

Blog.propTypes = {
  profileName: propTypes.string,
  blogPosts: propTypes.oneOfType([propTypes.array]),
};

export default Blog;
