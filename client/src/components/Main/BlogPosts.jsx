import React from 'react';

const BlogPost = ({ blogPosts }) => (
  blogPosts.map((post) => (
    <div className="blogpost" key={blogPosts.indexOf(post)}>
      {post[0]}
      {' '}
      (
      <a href="http://wolfebyte.net">view more</a>
      )
    </div>
  ))
);

export default BlogPost;
