import React from 'react';
import Img from 'react-cool-img';
import LinesEllipsis from 'react-lines-ellipsis';

import loadingImage from '../../../public/img/420.jpeg';
import errorImage from '../../../public/img/404.jpeg';

const FriendsTop = ({ friendsTop }) => (
  friendsTop.map((friend) => (
    <div className="friends-top-icon" key={friendsTop.indexOf(friend)}>
      <div className="friends-top-icon-name">
        <LinesEllipsis
          text={friend[0]}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
      <Img
        className="friends-top-icon-img"
        src={friend[1]}
        placeholder={loadingImage}
        error={errorImage}
        lazy
        cache
        alt="top friend profile icon"
      />
    </div>
  ))
);

export default FriendsTop;
