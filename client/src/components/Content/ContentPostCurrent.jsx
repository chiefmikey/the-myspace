import React from 'react';
import propTypes from 'prop-types';
import DOMPurify from 'dompurify';

import ContentSocial from './ContentSocial.jsx';

const ContentPostCurrent = ({ currentPost }) => {
  if (currentPost._id < 0) {
    return (
      <div id="content-current-post">
        <div id="content-current-post-title">
          <h5>this user has no content posts</h5>
        </div>
        <div id="content-current-post-text">
          tell them to post something lol
        </div>
        <ContentSocial currentPost={currentPost} />
      </div>
    );
  }
  return (
    <div id="content-current-post">
      {/* <div id="content-current-post-title">
        <h5>{currentPost.title}</h5>
      </div> */}
      <div
        id="content-current-post-text"
        dangerouslySetInnerHTML={{
          __html: currentPost.text,
        }}
      ></div>
      <ContentSocial currentPost={currentPost} />
    </div>
  );
};

ContentPostCurrent.defaultProps = {
  currentPost: {},
};

ContentPostCurrent.propTypes = {
  currentPost: propTypes.oneOfType([propTypes.object]),
};

export default ContentPostCurrent;
