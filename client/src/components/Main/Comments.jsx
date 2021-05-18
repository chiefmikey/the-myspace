import React from 'react';

import wbyte from '../../../public/img/wbyte.png';

const Comments = () => (
  <div id="comments">
    <div id="comments-name">
      <b>wolfebyte's Friends Comments</b>
    </div>
    <div id="comments-count">
      <b>Displaying 50 of 100 comments ( View All | Add Comment )</b>
    </div>
    <div className="comments-post">
      <div className="comments-post-left">
        <div className="comments-post-left-name">
          ding dong
        </div>
        <img className="comments-post-left-pic" src={wbyte} alt="comment author avatar" />
      </div>
      <div className="comments-post-right">
        <div className="comments-post-right-date">
          Sep 21 2008 5:26P
        </div>
        <div className="comments-post-right-content">
          you're the best
        </div>
      </div>
    </div>
  </div>
);

export default Comments;
