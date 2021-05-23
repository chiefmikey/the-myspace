import React from 'react';
import propTypes from 'prop-types';
import Img from 'react-cool-img';
import LinesEllipsis from 'react-lines-ellipsis';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

import loadingImage from '../../../public/img/420.jpeg';
import errorImage from '../../../public/img/404.jpeg';

const FriendsTop = ({ friendsTop, history, getSelectedUser }) => friendsTop.map((friend) => (
  <Router history={history} key={friendsTop.indexOf(friend)}>
    <Link
      to={friend.urlAddress ? friend.urlAddress : '/'}
      className="friends-top-icon"
      onClick={() => {
        getSelectedUser(friend._id);
        history.push(friend.urlAddress);
      }}
    >
      <div className="friends-top-icon-name">
        <LinesEllipsis
          text={friend.profileName}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
      <Img
        className="friends-top-icon-img"
        src={friend.profilePic}
        placeholder={loadingImage}
        error={errorImage}
        lazy
        cache
        alt="top friend profile icon"
      />
    </Link>
  </Router>
));

FriendsTop.defaultProps = {
  friendsTop: [],
};

FriendsTop.propTypes = {
  friendsTop: propTypes.oneOfType([propTypes.array]),
};

export default withRouter(FriendsTop);
