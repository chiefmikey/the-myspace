import React from 'react';
import propTypes from 'prop-types';

const Interests = ({ currentUser }) => (
  <div id="interests">
    <div id="interests-name">
      <h5>
        {currentUser.profileName}
        &apos;s Interests
      </h5>
    </div>
    <div id="interests-main">
      <div id="interests-general">
        <div className="interests-left">
          <div className="interests-section">
            <h6>General</h6>
          </div>
        </div>
        <div className="interests-right">
          <div className="interests-content">
            {currentUser.interestsGeneral}
          </div>
        </div>
      </div>
      <div id="interests-music">
        <div className="interests-left">
          <div className="interests-section">
            <h6>Music</h6>
          </div>
        </div>
        <div className="interests-right">
          <div className="interests-content">
            {currentUser.interestsMusic}
          </div>
        </div>
      </div>
      <div id="interests-movies">
        <div className="interests-left">
          <div className="interests-section">
            <h6>Movies</h6>
          </div>
        </div>
        <div className="interests-right">
          <div className="interests-content">
            {currentUser.interestsMovies}
          </div>
        </div>
      </div>
      <div id="interests-television">
        <div className="interests-left">
          <div className="interests-section">
            <h6>Television</h6>
          </div>
        </div>
        <div className="interests-right">
          <div className="interests-content">
            {currentUser.interestsTelevision}
          </div>
        </div>
      </div>
      <div id="interests-books">
        <div className="interests-left">
          <div className="interests-section">
            <h6>Books</h6>
          </div>
        </div>
        <div className="interests-right">
          <div className="interests-content">
            {currentUser.interestsBooks}
          </div>
        </div>
      </div>
      <div id="interests-heroes">
        <div className="interests-left">
          <div className="interests-section">
            <h6>Heroes</h6>
          </div>
        </div>
        <div className="interests-right">
          <div className="interests-content">
            {currentUser.interestsHeroes}
          </div>
        </div>
      </div>
    </div>
  </div>
);

Interests.defaultProps = {
  currentUser: {},
};

Interests.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default Interests;
