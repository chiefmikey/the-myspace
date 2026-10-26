import React from 'react';

import ContentPostList from './ContentPostList';

const ContentAll = ({ currentUser, currentPost, selectPost }) => (
  <ContentPostList
    currentUser={currentUser}
    selectPost={selectPost}
    currentPost={currentPost}
  />
);

export default ContentAll;
