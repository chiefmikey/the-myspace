import propTypes from 'prop-types';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import {Link} from 'react-router-dom';

import ProfilePic from '../Profile/ProfilePic';

import ContentSocial from './ContentSocial';

const ContentFoot = ({ currentUser, currentPost }) => (
  <div id="content-foot">
    <div id="content-foot-card">
              <Link to={`${currentUser.urlAddress}`}>
          <h3>
            <LinesEllipsis
              className="content-firstName"
              text={`${currentUser.description.firstName} ${currentUser.description.lastName} `}
              ellipsis="... "
              basedOn="letters"
            />
          </h3>
        </Link>
      <div id="content-foot-info">
        <div id="content-foot-pic">
          <ProfilePic currentUser={currentUser} />
        </div>
        <div id="content-foot-profile">
          <LinesEllipsis
            className="content-foot-about"
            text={currentUser.blurbs.aboutMe}
            ellipsis="... "
            maxLine={3}
            basedOn="words"
          />
                      <Link to={`${currentUser.urlAddress}`}>
              <h3>
                <LinesEllipsis
                  className="content-foot-profile-link"
                  text="View Profile"
                  ellipsis="... "
                  basedOn="letters"
                />
              </h3>
            </Link>
        </div>
      </div>
    </div>
    <ContentSocial currentPost={currentPost} />
  </div>
);

ContentFoot.defaultProps = {
  currentUser: {},
  currentPost: { _id: -2 },
};

ContentFoot.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
  currentPost: propTypes.oneOfType([propTypes.object]),
};

export default ContentFoot;
