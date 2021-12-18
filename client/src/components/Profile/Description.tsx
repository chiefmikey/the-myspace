import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import { Router, Link, withRouter } from 'react-router-dom';

import ProfilePic from './ProfilePic.jsx';

const Description = ({ history, currentUser, contentView }) => (
  <div id="description">
    <ProfilePic currentUser={currentUser} />
    {contentView ? (
      <div id="description-mood-view">
        <div id="description-mood">
          <span id="description-mood-name">Mood: </span>
          <span id="description-mood-current">
            {currentUser.description.mood}
          </span>
          <span id="description-mood-current-emoji">
            {' '}
            {currentUser.description.moodEmoji}
          </span>
        </div>
        <div id="description-view-pics">
          View My:{' '}
          <span className="a-button">
            <Router history={history}>
              <Link to={`${currentUser.urlAddress}`}>Profile</Link>
            </Router>
          </span>
        </div>
      </div>
    ) : (
      <div id="description-mood-view">
        <div id="description-mood">
          <span id="description-mood-name">Mood: </span>
          <span id="description-mood-current">
            {currentUser.description.mood}
          </span>
          <span id="description-mood-current-emoji">
            {' '}
            {currentUser.description.moodEmoji}
          </span>
        </div>
        <div id="description-view-pics">
          View My: <span className="a-button">Pics</span>
          {' | '}
          <span className="a-button">Videos</span>
        </div>
      </div>
    )}
    <div id="description-desc">
      <span id="description-desc-status">
        &quot;
        <LinesEllipsis
          id="description-desc-status-text"
          text={`${currentUser.description.status} `}
          ellipsis="... "
          basedOn="letters"
          component="span"
        />
        <span id="description-desc-status-text-quote">&quot;</span>
      </span>
      <span id="description-desc-gender">{currentUser.description.gender}</span>
      <span id="description-desc-age">
        {currentUser.description.age} years old
      </span>
      <span id="description-desc-city">{currentUser.description.city}</span>
      <span id="description-desc-state">{currentUser.description.state}</span>
      <span id="description-desc-country">
        {currentUser.description.country}
      </span>
      <span id="description-desc-login">Last Login:</span>
      <span id="description-desc-login-date">
        {currentUser.description.login}
      </span>
    </div>
  </div>
);

Description.defaultProps = {
  currentUser: {},
  contentView: false,
  history: {},
};

Description.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
  contentView: propTypes.bool,
  history: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(Description);
