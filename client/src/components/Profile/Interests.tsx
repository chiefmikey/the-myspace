import propTypes from 'prop-types';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

const Interests = ({ currentUser }) => (
  <div id="interests">
    <h5 id="interests-name">
      <LinesEllipsis
        text={`${currentUser.description.firstName} `}
        ellipsis="... "
        basedOn="letters"
        component="span"
      />
      <span id="interests-name-text">&apos;s Interests</span>
    </h5>
    <div id="interests-main">
      <div id="interests-general">
        <div className="interests-left">
          <div className="interests-section">
            <h6>General</h6>
          </div>
        </div>
        <div className="interests-right">
          <div className="interests-text">{currentUser.interests.general}</div>
        </div>
      </div>
      <div id="interests-music">
        <div className="interests-left">
          <div className="interests-section">
            <h6>Music</h6>
          </div>
        </div>
        <div className="interests-right">
          <div className="interests-text">{currentUser.interests.music}</div>
        </div>
      </div>
      <div id="interests-movies">
        <div className="interests-left">
          <div className="interests-section">
            <h6>Movies</h6>
          </div>
        </div>
        <div className="interests-right">
          <div className="interests-text">{currentUser.interests.movies}</div>
        </div>
      </div>
      <div id="interests-television">
        <div className="interests-left">
          <div className="interests-section">
            <h6>Television</h6>
          </div>
        </div>
        <div className="interests-right">
          <div className="interests-text">
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
          <div className="interests-text">{currentUser.interests.books}</div>
        </div>
      </div>
      <div id="interests-heroes">
        <div className="interests-left">
          <div className="interests-section">
            <h6>Heroes</h6>
          </div>
        </div>
        <div className="interests-right">
          <div className="interests-text">{currentUser.interests.heroes}</div>
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
