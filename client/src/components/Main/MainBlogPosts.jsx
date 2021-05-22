import React from 'react';

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

export default MainBlogPosts;
