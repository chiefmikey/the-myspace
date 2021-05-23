import React from 'react';
import propTypes from 'prop-types';

import CommentsCount from './CommentsCount';
import CommentsPost from './CommentsPost';

const CommentsList = ({ currentUser }) => (
  <div id="comments">
    <div id="comments-name">
      <h5>
        {currentUser.profileName}
        &apos;s Friends Comments
      </h5>
    </div>
    <CommentsCount comments={currentUser.comments} />
    <CommentsPost comments={currentUser.comments} />
  </div>
);

CommentsList.defaultProps = {
  currentUser: {},
};

CommentsList.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default CommentsList;
