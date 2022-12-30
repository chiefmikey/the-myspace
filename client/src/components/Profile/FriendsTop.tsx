import propTypes from 'prop-types';
import React from 'react';
import Img from 'react-cool-img';
import LinesEllipsis from 'react-lines-ellipsis';
import { Router, Link, withRouter } from 'react-router-dom';

import errorImage from '../../../public/img/404.jpeg';
import loadingImage from '../../../public/img/420.jpeg';

const FriendsTop = ({ friendsTop, history, getCurrentUser }) =>
  friendsTop.map((friend) => (
    <Router history={history} key={friendsTop.indexOf(friend)}>
      <Link
        to={friend[1].urlAddress}
        className="friends-top-icon"
        onClick={() => {
          getCurrentUser();
        }}
      >
        <LinesEllipsis
          className="friends-top-icon-name"
          text={`${friend[1].description.firstName} ${friend[1].description.lastName} `}
          ellipsis="... "
          basedOn="letters"
        />
        <Img
          className="friends-top-icon-img"
          src={friend[1].description.pic}
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
