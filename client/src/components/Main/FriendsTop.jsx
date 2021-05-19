import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

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
      <img className="friends-top-icon-img" src={friend[1]} alt="friends profile icon" />
    </div>
  ))
);

export default FriendsTop;
