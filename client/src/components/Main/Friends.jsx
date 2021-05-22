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
      <h5>
        {profileName}
        &apos;s Friend Space
      </h5>
    </div>
    <div id="friends-count">
      {profileName}
      {' has '}
      <div id="friends-count-current">
        {friends.length}
      </div>
      {' friends.'}
    </div>
    <div id="friends-top">
      <FriendsTop friendsTop={friendsTop} />
    </div>
    <a id="friends-view-all" href="http://wolfebyte.net">
      View all of
      {' '}
      {profileName}
      &apos;s friends
    </a>
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
