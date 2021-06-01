import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

const MainPostedPosts = ({ postedPosts, postUrl }) => (
  postedPosts.map((post) => (
    <div className="main-posted-post" key={postedPosts.indexOf(post)}>
      <LinesEllipsis
        text={post[1]}
        maxLine="1"
        ellipsis="..."
        trimRight
      />
      <span className="main-posted-post-more">
        (
        <div
          className="text-button"
          onClick={() => postUrl(post[1])}
          onKeyPress={() => postUrl(post[1])}
          tabIndex={0}
          role="button"
        >
          view more
        </div>
        )
      </span>
    </div>
  ))
);

MainPostedPosts.defaultProps = {
  postedPosts: [],
  postUrl: () => {},
};

MainPostedPosts.propTypes = {
  postedPosts: propTypes.oneOfType([propTypes.array]),
  postUrl: propTypes.func,
};

export default MainPostedPosts;
