import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

import CommentsCount from './CommentsCount';
import CommentsPost from './CommentsPost';

const CommentsList = ({ currentUser, getCurrentUser, history }) => (
  <div id="comments">
    <h5 id="comments-name">
      <LinesEllipsis
        text={`${currentUser.description.name} `}
        ellipsis="... "
        basedOn="letters"
        component="span"
      />
      <span id="comments-name-text">
        &apos;s Friends Comments
      </span>
    </h5>
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
