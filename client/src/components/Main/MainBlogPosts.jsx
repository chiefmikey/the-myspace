import React from 'react';
import propTypes from 'prop-types';

const MainBlogPosts = ({ blogPosts }) => (
  blogPosts.map((post) => (
    <div className="main-blogpost" key={blogPosts.indexOf(post)}>
      {post[0]}
      {' '}
      (
      <a href="http://wolfebyte.net">view more</a>
      )
    </div>
  ))
);

MainBlogPosts.defaultProps = {
  blogPosts: [],
};

MainBlogPosts.propTypes = {
  blogPosts: propTypes.oneOfType([propTypes.array]),
};

export default MainBlogPosts;
