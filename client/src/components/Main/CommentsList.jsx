import React from 'react';
import propTypes from 'prop-types';

import CommentsCount from './CommentsCount';
import CommentsPost from './CommentsPost';

const CommentsList = ({ profileName, comments }) => (
  <div id="comments">
    <div id="comments-name">
      {profileName}
      &apos;s Friends Comments
    </div>
    <CommentsCount comments={comments} />
    <CommentsPost comments={comments} />
  </div>
);

CommentsList.defaultProps = {
  profileName: '',
  comments: [],
};

CommentsList.propTypes = {
  profileName: propTypes.string,
  comments: propTypes.oneOfType([propTypes.array]),
};

export default CommentsList;
