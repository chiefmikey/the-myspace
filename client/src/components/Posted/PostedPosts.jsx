import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

const PostedPosts = ({
  sortedPosts, selectPost, currentPost, highlightPost, history,
}) => {
  if (sortedPosts.length > 0) {
    let highlightId = highlightPost;
    return sortedPosts.map((post) => {
      let className = 'posted-post';
      if (!highlightId || highlightId === '') {
        [[, highlightId]] = sortedPosts;
      }
      if (highlightId === post[1]) {
        className = 'posted-post selected';
      }
      return (
        <div
          className={className}
          key={sortedPosts.indexOf(post)}
          onClick={() => selectPost(post[1])}
          onKeyPress={() => selectPost(post[1])}
          tabIndex={0}
          role="button"
        >
          <LinesEllipsis
            text={post[1]}
            maxLine="2"
            ellipsis="..."
            trimRight
          />
        </div>
      );
    });
  }
  return (
    <div
      className="posted-post selected"
      key={-1}
      onClick={() => selectPost(-1)}
      onKeyPress={() => selectPost(-1)}
      tabIndex={0}
      role="button"
    >
      ( None )
    </div>
  );
};

PostedPosts.defaultProps = {
  history: {},
  sortedPosts: [],
  currentPost: [],
  selectPost: () => {},
  highlightPost: '',
};

PostedPosts.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  sortedPosts: propTypes.oneOfType([propTypes.array]),
  currentPost: propTypes.oneOfType([propTypes.array]),
  selectPost: propTypes.func,
  highlightPost: propTypes.string,
};

export default PostedPosts;
