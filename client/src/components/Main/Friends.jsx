import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

import FriendsTop from './FriendsTop';

class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friendsTop: [],
    };
    this.getTop8 = this.getTop8.bind(this);
  }

  componentDidMount() {
    this.getTop8();
  }

  componentDidUpdate(prevProps) {
    const { currentUser } = this.props;
    if (prevProps.currentUser._id !== currentUser._id) {
      this.getTop8();
    }
  }

  getTop8() {
    const { currentUser } = this.props;
    const topFriends = [];
    const friendsTop = [];
    if (currentUser.friends) {
      for (let i = 0; i < currentUser.friends.length; i += 1) {
        if (currentUser.friends[i][0] <= 8) {
          topFriends.push(currentUser.friends[i]);
          if (topFriends.length >= 8) {
            break;
          }
        }
      }
    }
    topFriends.forEach((friend, index, array) => {
      axios.get('/user/icon', {
        params: {
          iconUserId: friend[1],
        },
      })
        .then((res) => {
          friendsTop.push([friend[0], res.data]);
          if (friendsTop.length === array.length) {
            this.setState({ friendsTop: friendsTop.sort((a, b) => a[0] - b[0]) });
          }
        });
    });
  }

  render() {
    const { currentUser, history, getCurrentUser } = this.props;
    const { friendsTop } = this.state;
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
  history: {},
  currentUser: {},
  getCurrentUser: () => {},
};

Friends.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
  getCurrentUser: propTypes.func,
};

export default Friends;
