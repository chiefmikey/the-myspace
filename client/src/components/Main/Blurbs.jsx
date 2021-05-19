import React from 'react';
import propTypes from 'prop-types';

const Blurbs = ({
  profileName,
  blurbsAboutMe,
  blurbsWhoIdLikeToMeet,
}) => (
  <div id="blurbs">
    <div id="blurbs-name">
      {profileName}
      &apos;s Blurbs
    </div>
    <div id="blurbs-about">
      <div id="blurbs-about-me">
        About Me:
      </div>
      {blurbsAboutMe}
      <div id="blurbs-about-meet">
        Who Id Like To Meet:
      </div>
      {blurbsWhoIdLikeToMeet}
    </div>
  </div>
);

Blurbs.defaultProps = {
  profileName: '',
  blurbsAboutMe: '',
  blurbsWhoIdLikeToMeet: '',
};

Blurbs.propTypes = {
  profileName: propTypes.string,
  blurbsAboutMe: propTypes.string,
  blurbsWhoIdLikeToMeet: propTypes.string,
};

export default Blurbs;
