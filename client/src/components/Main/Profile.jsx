import React from 'react';
import propTypes from 'prop-types';
import Img from 'react-cool-img';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

import loadingImage from '../../../public/img/420.jpeg';
import errorImage from '../../../public/img/404.jpeg';

const Profile = ({ history, currentUser, blog }) => (
  <div id="profile">
    <div id="profile-name">
      <h3>
        <Router history={history}>
          <Link to={`${currentUser.urlAddress}`} onClick={() => history.push(`${currentUser.urlAddress}`)}>{currentUser.profileName}</Link>
        </Router>
      </h3>
    </div>
    <div id="profile-pic">
      <Img
        id="profile-pic-img"
        src={currentUser.profilePic}
        placeholder={loadingImage}
        error={errorImage}
        lazy
        cache
        alt="user profile avatar"
      />
    </div>
    {blog
      ? (
        <div id="profile-mood">
          <div id="profile-mood-name">Mood:</div>
          <div id="profile-mood-current">{currentUser.profileMood}</div>
          <div id="profile-mood-current-emoji">{currentUser.profileMoodEmoji}</div>
          <div id="profile-mood-view-pics">
            [
            <div className="text-button">
              <Router history={history}>
                <Link to={`${currentUser.urlAddress}`} onClick={() => history.push(`${currentUser.urlAddress}`)}>View Profile</Link>
              </Router>
            </div>
            ]
          </div>
        </div>
      )
      : (
        <div id="profile-mood">
          <div id="profile-mood-name">Mood:</div>
          <div id="profile-mood-current">{currentUser.profileMood}</div>
          <div id="profile-mood-current-emoji">{currentUser.profileMoodEmoji}</div>
          <div id="profile-mood-view-pics">
            View My:
            {' '}
            <span className="text-button">Pics</span>
            {' '}
            |
            {' '}
            <span className="text-button">Videos</span>
          </div>
        </div>
      )}
    <div id="profile-desc">
      <div id="profile-desc-status">
        &quot;
        {currentUser.profileStatus}
        &quot;
      </div>
      <div id="profile-desc-gender">{currentUser.profileGender}</div>
      <div id="profile-desc-age">
        {currentUser.profileAge}
        {' '}
        years old
      </div>
      <div id="profile-desc-city">{currentUser.profileCity}</div>
      <div id="profile-desc-state">{currentUser.profileState}</div>
      <div id="profile-desc-country">{currentUser.profileCountry}</div>
      <div id="profile-desc-login">Last Login:</div>
      <div id="profile-desc-login-date">{currentUser.profileLogin}</div>
    </div>
  </div>
);

Profile.defaultProps = {
  currentUser: {},
  blog: false,
  history: {},
};

Profile.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
  blog: propTypes.bool,
  history: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(Profile);
