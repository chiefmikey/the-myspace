import React from 'react';
import propTypes from 'prop-types';

import FriendsTop from './FriendsTop';

const Friends = ({
  profileName,
  friends,
  friendsTop,
}) => (
  <div id="friends">
    <div id="friends-name">
      <b>
        {profileName}
        's Friend Space
      </b>
    </div>
    <div id="friends-count">
      {profileName}
      {' '}
      has
      {' '}
      {friends.length}
      {' '}
      friends.
    </div>
    <div id="friends-top">
      <FriendsTop friendsTop={friendsTop} />
    </div>
    <div id="friends-view-all">
      View all of
      {' '}
      {profileName}
      's friends
    </div>
  </div>
);

Friends.defaultProps = {
  profileName: '',
  friends: [],
  friendsTop: [],
};

Friends.propTypes = {
  profileName: propTypes.string,
  friends: propTypes.oneOfType([propTypes.array]),
  friendsTop: propTypes.oneOfType([propTypes.array]),
};

export default Friends;
