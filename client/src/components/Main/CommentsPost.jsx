import React from 'react';

const CommentsPost = ({ comments }) => (
  comments.map((comment) => (
    <div className="comments-post" key={comments.indexOf(comment)}>
      <div className="comments-post-left">
        <div className="comments-post-left-name">
          {comment[0][0]}
        </div>
        <img className="comments-post-left-pic" src={comment[0][1]} alt="comment author avatar" />
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

export default CommentsPost;
