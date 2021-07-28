import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

const Details = ({ currentUser }) => (
  <div id="details">
    <h5 id="details-name">
      <LinesEllipsis
        text={`${currentUser.description.name} `}
        ellipsis="... "
        basedOn="letters"
        component="span"
      />
      <span id="details-name-text">&apos;s Details</span>
    </h5>
    <div id="details-main">
      <div id="details-status">
        <div className="details-left">
          <div className="details-section">
            <h6>Status:</h6>
          </div>
        </div>
        <div className="details-right">
          <div className="details-text">{currentUser.details.status}</div>
        </div>
      </div>
      <div id="details-here">
        <div className="details-left">
          <div className="details-section">
            <h6>Here for:</h6>
          </div>
        </div>
        <div className="details-right">
          <div className="details-text">{currentUser.details.hereFor}</div>
        </div>
      </div>
      <div id="details-hometown">
        <div className="details-left">
          <div className="details-section">
            <h6>Hometown:</h6>
          </div>
        </div>
        <div className="details-right">
          <div className="details-text">{currentUser.details.hometown}</div>
        </div>
      </div>
      <div id="details-zodiac">
        <div className="details-left">
          <div className="details-section">
            <h6>Zodiac sign:</h6>
          </div>
        </div>
        <div className="details-right">
          <div className="details-text">{currentUser.details.zodiacSign}</div>
        </div>
      </div>
      <div id="details-smoke">
        <div className="details-left">
          <div className="details-section">
            <h6>Smoke / Drink:</h6>
          </div>
        </div>
        <div className="details-right">
          <div className="details-text">{currentUser.details.smokeDrink}</div>
        </div>
      </div>
      <div id="details-occupation">
        <div className="details-left">
          <div className="details-section">
            <h6>Occupation:</h6>
          </div>
        </div>
        <div className="details-right">
          <div className="details-text">{currentUser.details.occupation}</div>
        </div>
      </div>
    </div>
  </div>
);

Details.defaultProps = {
  currentUser: {},
};

Details.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default Details;
