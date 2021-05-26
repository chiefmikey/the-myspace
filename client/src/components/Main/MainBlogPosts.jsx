import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

const MainBlogPosts = ({ blogPosts }) => (
  blogPosts.map((post) => (
    <div className="main-blogpost" key={blogPosts.indexOf(post)}>
      <LinesEllipsis
        text={post[0]}
        maxLine="1"
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
      <div className="main-blogpost-more">
        {' '}
        (
        <a href="http://wolfebyte.net">view more</a>
        )
      </div>
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
