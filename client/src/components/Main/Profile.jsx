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

const Profile = ({ history, currentUser, posted }) => (
  <div id="profile">
    <span id="profile-name">
      <h3>
        <Router history={history}>
          <Link to={`${currentUser.urlAddress}`}>{currentUser.profileName}</Link>
        </Router>
      </h3>
    </span>
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
    {posted
      ? (
        <div id="profile-mood">
          <span id="profile-mood-name">Mood:</span>
          <span id="profile-mood-current">{currentUser.profileMood}</span>
          <span id="profile-mood-current-emoji">{currentUser.profileMoodEmoji}</span>
          <span id="profile-mood-view-pics">
            View My:
            {' '}
            <span className="text-button">
              <Router history={history}>
                <Link to={`${currentUser.urlAddress}`}>Profile</Link>
              </Router>
            </span>
          </span>
        </div>
      )
      : (
        <div id="profile-mood">
          <span id="profile-mood-name">Mood:</span>
          <span id="profile-mood-current">{currentUser.profileMood}</span>
          <span id="profile-mood-current-emoji">{currentUser.profileMoodEmoji}</span>
          <span id="profile-mood-view-pics">
            View My:
            {' '}
            <span className="text-button">Pics</span>
            {' | '}
            <span className="text-button">Videos</span>
          </span>
        </div>
      )}
    <div id="profile-desc">
      <span id="profile-desc-status">
        &quot;
        {currentUser.profileStatus}
        &quot;
      </span>
      <span id="profile-desc-gender">{currentUser.profileGender}</span>
      <span id="profile-desc-age">
        {currentUser.profileAge}
        {' '}
        years old
      </span>
      <span id="profile-desc-city">{currentUser.profileCity}</span>
      <span id="profile-desc-state">{currentUser.profileState}</span>
      <span id="profile-desc-country">{currentUser.profileCountry}</span>
      <span id="profile-desc-login">Last Login:</span>
      <span id="profile-desc-login-date">{currentUser.profileLogin}</span>
    </div>
  </div>
);

Profile.defaultProps = {
  currentUser: {},
  posted: false,
  history: {},
};

Profile.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
  posted: propTypes.bool,
  history: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(Profile);
