import React from 'react';

const CommentsCount = ({ comments }: { comments: string[] }) => {
  let count = 0;
  count = comments.length < 50 ? comments.length : 50;
  return (
    <div id="comments-count">
      Displaying <div id="comments-count-current">{count}</div>
      {' of '}
      <div id="comments-count-total">{comments.length}</div>
      {' comments ( '}
      <a
        href="http://themyspace.org"
        target="_blank"
        rel="noreferrer"
      >
        View All
      </a>
      {' | '}
      <a
        href="http://themyspace.org"
        target="_blank"
        rel="noreferrer"
      >
        Add Comment
      </a>
      {' ) '}
    </div>
  );
};

export default CommentsCount;
