import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

import FriendsTop from './FriendsTop';

class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      topFriend1: {},
      topFriend2: {},
      topFriend3: {},
      topFriend4: {},
      topFriend5: {},
      topFriend6: {},
      topFriend7: {},
      topFriend8: {},
    };
    this.getTop8 = this.getTop8.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { currentUser } = this.props;
    if (prevProps.currentUser !== currentUser) {
      this.getTop8();
    }
  }

  getTop8() {
    const { currentUser } = this.props;
    if (currentUser.friendsTop) {
      currentUser.friendsTop.forEach((friend) => axios.get('/user/icon', {
        params: {
          iconUserId: friend[0],
        },
      })
        .then((res) => this.setState({ [`topFriend${friend[1]}`]: res.data })));
    }
  }

  render() {
    const { currentUser, history, getCurrentUser } = this.props;
    const {
      topFriend1,
      topFriend2,
      topFriend3,
      topFriend4,
      topFriend5,
      topFriend6,
      topFriend7,
      topFriend8,
    } = this.state;
    const friendsTop = [
      topFriend1,
      topFriend2,
      topFriend3,
      topFriend4,
      topFriend5,
      topFriend6,
      topFriend7,
      topFriend8,
    ];
    return (
      <div id="friends">
        <div id="friends-name">
          <h5>
            {currentUser.profileName}
            &apos;s Friend Space
          </h5>
        </div>
        <div id="friends-count">
          {currentUser.profileName}
          {' has '}
          <div id="friends-count-current">
            {currentUser.friends ? currentUser.friends.length : ''}
          </div>
          {' friends.'}
        </div>
        <div id="friends-top">
          <FriendsTop
            friendsTop={friendsTop}
            history={history}
            getCurrentUser={getCurrentUser}
          />
        </div>
        <a id="friends-view-all" href="http://wolfebyte.net">
          View all of
          {' '}
          {currentUser.profileName}
          &apos;s friends
        </a>
      </div>
    );
  }
}

Friends.defaultProps = {
  currentUser: {},
};

Friends.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default Friends;
