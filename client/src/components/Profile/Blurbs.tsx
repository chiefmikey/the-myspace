import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

const Blurbs = ({ currentUser }) => (
  <div id="blurbs">
    <h5 id="blurbs-name">
      <LinesEllipsis
        text={`${currentUser.description.firstName} `}
        ellipsis="... "
        basedOn="letters"
        component="span"
      />
      <span id="blurbs-name-text">&apos;s Blurbs</span>
    </h5>
    <div id="blurbs-about">
      <div id="blurbs-about-me">About Me:</div>
      {currentUser.blurbs.aboutMe}
      <div id="blurbs-about-meet">Who Id Like To Meet:</div>
      {currentUser.blurbs.whoIdLikeToMeet}
    </div>
  </div>
);

export default Blurbs;
