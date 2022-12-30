import axios from 'axios';
import propTypes from 'prop-types';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

import FriendsTop from './FriendsTop.jsx';

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

  componentDidUpdate(previousProperties) {
    const { currentUser } = this.props;
    if (previousProperties.currentUser._id !== currentUser._id) {
      this.getTop8();
    }
  }

  getTop8() {
    const { currentUser } = this.props;
    const topFriends = [];
    const friendsTop = [];
    if (currentUser.friends) {
      for (let index = 0; index < currentUser.friends.length; index += 1) {
        if (currentUser.friends[index][0] < 8) {
          topFriends.push(currentUser.friends[index]);
          if (topFriends.length >= 8) {
            break;
          }
        }
      }
    }
    topFriends.forEach((friend, index, array) => {
      axios
        .get('/user/icon', {
          params: {
            iconUserId: friend[1],
          },
        })
        .then((res) => {
          friendsTop.push([friend[0], res.data]);
          if (friendsTop.length === array.length) {
            this.setState({
              friendsTop: friendsTop.sort((a, b) => a[0] - b[0]),
            });
          }
        });
    });
  }

  render() {
    const { currentUser, history, getCurrentUser } = this.props;
    const { friendsTop } = this.state;
    return (
      <div id="friends">
        <h5 id="friends-name">
          <LinesEllipsis
            text={`${currentUser.description.firstName} `}
            ellipsis="... "
            basedOn="letters"
            component="span"
          />
          <span id="friends-name-text">&apos;s Friend Space</span>
        </h5>
        <div id="friends-count">
          <LinesEllipsis
            id="friends-count-name"
            text={`${currentUser.description.firstName} `}
            ellipsis="... "
            basedOn="letters"
            component="span"
          />
          <span id="friends-count-text">{'has '}</span>
          <LinesEllipsis
            id="friends-count-current"
            text={`${currentUser.friends ? currentUser.friends.length : ''} `}
            ellipsis="... "
            basedOn="letters"
            component="span"
          />
          <span id="friends-count-text-end">{' friends.'}</span>
        </div>
        <div id="friends-top">
          <FriendsTop
            friendsTop={friendsTop}
            history={history}
            getCurrentUser={getCurrentUser}
          />
        </div>
        <a id="friends-view-all" href="http://themyspace.org">
          <span id="friends-view-all-text">{'View all of '}</span>
          <LinesEllipsis
            id="friends-view-all-name"
            text={`${currentUser.description.firstName} `}
            ellipsis="... "
            basedOn="letters"
            component="span"
          />
          <span id="friends-view-all-text-end">&apos;s friends</span>
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
