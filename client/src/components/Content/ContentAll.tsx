import React from 'react';

import ContentPostList from './ContentPostList';

const ContentAll = (history, currentUser, currentPost, selectPost) => (
  <ContentPostList
    history={history}
    currentUser={currentUser}
    selectPost={selectPost}
    currentPost={currentPost}
  />
);

export default ContentAll;
