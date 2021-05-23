import React from 'react';
import propTypes from 'prop-types';
import Img from 'react-cool-img';

import loadingImage from '../../../public/img/420.jpeg';
import errorImage from '../../../public/img/404.jpeg';

const CommentsPost = ({ comments }) => (
  comments.map((comment) => (
    <div className="comments-post" key={comments.indexOf(comment)}>
      <div className="comments-post-left">
        <div className="comments-post-left-name">
          {comment[0][0]}
        </div>
        <Img
          className="comments-post-left-pic"
          src={comment[0][1]}
          placeholder={loadingImage}
          error={errorImage}
          lazy
          cache
          alt="comment author avatar"
        />
      </div>
      <div className="comments-post-right">
        <div className="comments-post-right-date">
          {comment[1]}
        </div>
        <div className="comments-post-right-content">
          {comment[2]}
        </div>
      </div>
    </div>
  ))
);

CommentsPost.defaultProps = {
  comments: [],
};

CommentsPost.propTypes = {
  comments: propTypes.oneOfType([propTypes.array]),
};

export default CommentsPost;
