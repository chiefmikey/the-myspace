import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

const BlogPosts = ({ blogPosts }) => blogPosts.map((post, index) => {
  let cap;
  if (index === 0) {
    cap = 'first';
  }
  if (index === blogPosts.length - 1) {
    cap = 'last';
  }
  console.log(cap);
  return (
    <div className={`blogpost ${cap}`} key={blogPosts.indexOf(post)}>
      <LinesEllipsis
        text={post[1]}
        maxLine="1"
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
    </div>
  );
});

BlogPosts.defaultProps = {
  blogPosts: [],
};

BlogPosts.propTypes = {
  blogPosts: propTypes.oneOfType([propTypes.array]),
};

export default BlogPosts;
