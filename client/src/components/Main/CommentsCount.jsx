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
      Displaying
      {' '}
      {count}
      {' '}
      of
      {' '}
      {comments.length}
      {' '}
      comments ( View All | Add Comment )
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
