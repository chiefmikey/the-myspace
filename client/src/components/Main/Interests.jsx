import React from 'react';
import propTypes from 'prop-types';

const Interests = ({
  profileName,
  interestsGeneral,
  interestsMusic,
  interestsMovies,
  interestsTelevision,
  interestsBooks,
  interestsHeroes,
}) => (
  <div id="interests">
    <div id="interests-name">
      <h5>
        {profileName}
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
            {interestsGeneral}
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
            {interestsMusic}
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
            {interestsMovies}
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
            {interestsTelevision}
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
            {interestsBooks}
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
            {interestsHeroes}
          </div>
        </div>
      </div>
    </div>
  </div>
);

Interests.defaultProps = {
  profileName: '',
  interestsGeneral: '',
  interestsMusic: '',
  interestsMovies: '',
  interestsTelevision: '',
  interestsBooks: '',
  interestsHeroes: '',
};

Interests.propTypes = {
  profileName: propTypes.string,
  interestsGeneral: propTypes.string,
  interestsMusic: propTypes.string,
  interestsMovies: propTypes.string,
  interestsTelevision: propTypes.string,
  interestsBooks: propTypes.string,
  interestsHeroes: propTypes.string,
};

export default Interests;
