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

const Description = ({ history, currentUser, posted }) => (
  <div id="description">
    <span id="description-name">
      <h3>
        <Router history={history}>
          <Link to={`${currentUser.urlAddress}`}>{currentUser.description.name}</Link>
        </Router>
      </h3>
    </span>
    <div id="description-pic">
      <Img
        id="description-pic-img"
        src={currentUser.description.pic}
        placeholder={loadingImage}
        error={errorImage}
        lazy
        cache
        alt="user description avatar"
      />
    </div>
    {posted
      ? (
        <div id="description-mood">
          <span id="description-mood-name">Mood:</span>
          <span id="description-mood-current">{currentUser.description.mood}</span>
          <span id="description-mood-current-emoji">{currentUser.description.moodEmoji}</span>
          <span id="description-mood-view-pics">
            View My:
            {' '}
            <span className="text-button">
              <Router history={history}>
                <Link to={`${currentUser.urlAddress}`}>Description</Link>
              </Router>
            </span>
          </span>
        </div>
      )
      : (
        <div id="description-mood">
          <span id="description-mood-name">Mood:</span>
          <span id="description-mood-current">{currentUser.description.mood}</span>
          <span id="description-mood-current-emoji">{currentUser.description.moodEmoji}</span>
          <span id="description-mood-view-pics">
            View My:
            {' '}
            <span className="text-button">Pics</span>
            {' | '}
            <span className="text-button">Videos</span>
          </span>
        </div>
      )}
    <div id="description-desc">
      <span id="description-desc-status">
        &quot;
        {currentUser.description.status}
        &quot;
      </span>
      <span id="description-desc-gender">{currentUser.description.gender}</span>
      <span id="description-desc-age">
        {currentUser.description.age}
        {' '}
        years old
      </span>
      <span id="description-desc-city">{currentUser.description.city}</span>
      <span id="description-desc-state">{currentUser.description.state}</span>
      <span id="description-desc-country">{currentUser.description.country}</span>
      <span id="description-desc-login">Last Login:</span>
      <span id="description-desc-login-date">{currentUser.description.login}</span>
    </div>
  </div>
);

Description.defaultProps = {
  currentUser: {},
  posted: false,
  history: {},
};

Description.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
  posted: propTypes.bool,
  history: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(Description);
