import React from 'react';
import propTypes from 'prop-types';

const Blurbs = ({ currentUser }) => (
  <div id="blurbs">
    <div id="blurbs-name">
      <h5>
        {currentUser.profileName}
        &apos;s Blurbs
      </h5>
    </div>
    <div id="blurbs-about">
      <div id="blurbs-about-me">
        About Me:
      </div>
      {currentUser.blurbsAboutMe}
      <div id="blurbs-about-meet">
        Who Id Like To Meet:
      </div>
      {currentUser.blurbsWhoIdLikeToMeet}
    </div>
  </div>
);

Blurbs.defaultProps = {
  currentUser: {},
};

Blurbs.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default Blurbs;
