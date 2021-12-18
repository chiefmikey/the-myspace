import React from 'react';
import propTypes from 'prop-types';

const CommentsCount = ({ comments }) => {
  let count = 0;
  if (comments.length < 50) {
    count = comments.length;
  } else {
    count = 50;
  }
  return (
    <div id="comments-count">
      Displaying <div id="comments-count-current">{count}</div>
      {' of '}
      <div id="comments-count-total">{comments.length}</div>
      {' comments ( '}
      <a href="http://themyspace.org" target="_blank" rel="noreferrer">
        View All
      </a>
      {' | '}
      <a href="http://themyspace.org" target="_blank" rel="noreferrer">
        Add Comment
      </a>
      {' ) '}
    </div>
  );
};

CommentsCount.defaultProps = {
  comments: [],
};

CommentsCount.propTypes = {
  comments: propTypes.oneOfType([propTypes.array]),
};

export default CommentsCount;
