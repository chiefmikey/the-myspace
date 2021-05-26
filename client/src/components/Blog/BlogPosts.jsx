import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

const BlogPosts = ({ blogPosts }) => (
  blogPosts.map((post) => (
    <div className="blogpost" key={blogPosts.indexOf(post)}>
      <LinesEllipsis
        text={post[0]}
        maxLine="2"
        ellipsis="..."
        trimRight
        basedOn="letters"
      />

    </div>
  ))
);

BlogPosts.defaultProps = {
  blogPosts: [],
};

BlogPosts.propTypes = {
  blogPosts: propTypes.oneOfType([propTypes.array]),
};

export default BlogPosts;
