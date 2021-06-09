import React from 'react';
import propTypes from 'prop-types';

const Interests = ({ currentUser }) => (
  <div id="interests">
    <div id="interests-name">
      <h5>
        {currentUser.description.name}
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
            {currentUser.interests.general}
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
            {currentUser.interests.music}
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
            {currentUser.interests.movies}
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
            {currentUser.interests.television}
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
            {currentUser.interests.books}
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
            {currentUser.interests.heroes}
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
