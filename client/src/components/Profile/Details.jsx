import React from 'react';
import propTypes from 'prop-types';

const Details = ({ currentUser }) => (
  <div id="details">
    <div id="details-name">
      <h5>
        {currentUser.description.name}
        &apos;s Details
      </h5>
    </div>
    <div id="details-main">
      <div id="details-status">
        <div className="details-left">
          <div className="details-section">
            <h6>Status:</h6>
          </div>
        </div>
        <div className="details-right">
          <div className="details-content">
            {currentUser.details.status}
          </div>
        </div>
      </div>
      <div id="details-here">
        <div className="details-left">
          <div className="details-section">
            <h6>Here for:</h6>
          </div>
        </div>
        <div className="details-right">
          <div className="details-content">
            {currentUser.details.hereFor}
          </div>
        </div>
      </div>
      <div id="details-hometown">
        <div className="details-left">
          <div className="details-section">
            <h6>Hometown:</h6>
          </div>
        </div>
        <div className="details-right">
          <div className="details-content">
            {currentUser.details.hometown}
          </div>
        </div>
      </div>
      <div id="details-zodiac">
        <div className="details-left">
          <div className="details-section">
            <h6>Zodiac sign:</h6>
          </div>
        </div>
        <div className="details-right">
          <div className="details-content">
            {currentUser.details.zodiacSign}
          </div>
        </div>
      </div>
      <div id="details-smoke">
        <div className="details-left">
          <div className="details-section">
            <h6>Smoke / Drink:</h6>
          </div>
        </div>
        <div className="details-right">
          <div className="details-content">
            {currentUser.details.smokeDrink}
          </div>
        </div>
      </div>
      <div id="details-occupation">
        <div className="details-left">
          <div className="details-section">
            <h6>Occupation:</h6>
          </div>
        </div>
        <div className="details-right">
          <div className="details-content">
            {currentUser.details.occupation}
          </div>
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
