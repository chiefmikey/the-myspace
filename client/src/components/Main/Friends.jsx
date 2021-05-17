import React from 'react';

import wbyte from '../../../public/img/wbyte.png';

const Friends = () => (
  <div id="friends">
    <div id="friends-name">
      <b>wolfebyte's Friend Space</b>
    </div>
    <div id="friends-count">
      <b>wolfebyte has 298734 friends.</b>
    </div>
    <div id="friends-top-row">
      <div className="friends-top-icon">
        Friend 1
        <img className="friends-top-icon-img" src={wbyte} alt="friends profile icon" />
      </div>
      <div className="friends-top-icon">
        Friend 2
        <img className="friends-top-icon-img" src={wbyte} alt="friends profile icon" />
      </div>
      <div className="friends-top-icon">
        Friend 3
        <img className="friends-top-icon-img" src={wbyte} alt="friends profile icon" />
      </div>
      <div className="friends-top-icon">
        Friend 4
        <img className="friends-top-icon-img" src={wbyte} alt="friends profile icon" />
      </div>
    </div>
    <div id="friends-bottom-row">
      <div className="friends-top-icon">
        Friend 5
        <img className="friends-top-icon-img" src={wbyte} alt="friends profile icon" />
      </div>
      <div className="friends-top-icon">
        Friend 6
        <img className="friends-top-icon-img" src={wbyte} alt="friends profile icon" />
      </div>
      <div className="friends-top-icon">
        Friend 7
        <img className="friends-top-icon-img" src={wbyte} alt="friends profile icon" />
      </div>
      <div className="friends-top-icon">
        Friend 8
        <img className="friends-top-icon-img" src={wbyte} alt="friends profile icon" />
      </div>
    </div>
    <div id="friends-view-all">
      View all of wolfebyte's friends
    </div>
  </div>
);

export default Friends;
