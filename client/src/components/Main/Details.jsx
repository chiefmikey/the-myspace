import React from 'react';
import propTypes from 'prop-types';

const Details = ({
  profileName,
  detailsStatus,
  detailsHereFor,
  detailsHometown,
  detailsZodiacSign,
  detailsSmokeDrink,
  detailsOccupation,
}) => (
  <div id="details">
    <div id="details-name">
      <h5>
        {profileName}
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
            {detailsStatus}
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
            {detailsHereFor}
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
            {detailsHometown}
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
            {detailsZodiacSign}
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
            {detailsSmokeDrink}
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
            {detailsOccupation}
          </div>
        </div>
      </div>
    </div>
  </div>
);

Details.defaultProps = {
  profileName: '',
  detailsStatus: '',
  detailsHereFor: '',
  detailsHometown: '',
  detailsZodiacSign: '',
  detailsSmokeDrink: '',
  detailsOccupation: '',
};

Details.propTypes = {
  profileName: propTypes.string,
  detailsStatus: propTypes.string,
  detailsHereFor: propTypes.string,
  detailsHometown: propTypes.string,
  detailsZodiacSign: propTypes.string,
  detailsSmokeDrink: propTypes.string,
  detailsOccupation: propTypes.string,
};
export default Details;
