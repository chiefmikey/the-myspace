import React from 'react';
import propTypes from 'prop-types';

import CommentsCount from './CommentsCount';
import CommentsPost from './CommentsPost';

const CommentsList = ({ currentUser, getCurrentUser, history }) => (
  <div id="comments">
    <div id="comments-name">
      <h5>
        {currentUser.descriptionName}
        &apos;s Friends Comments
      </h5>
    </div>
    <CommentsCount comments={currentUser.comments} />
    {currentUser.comments.length > 0
      ? currentUser.comments.map((comment) => (
        <CommentsPost
          comment={comment}
          currentUser={currentUser}
          getCurrentUser={getCurrentUser}
          key={comment[0]}
        />
      ))
      : undefined}
  </div>
);

CommentsList.defaultProps = {
  currentUser: {},
};

CommentsList.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default CommentsList;
