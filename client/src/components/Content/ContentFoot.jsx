import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { Router, Link } from 'react-router-dom';
import propTypes from 'prop-types';
import ProfilePic from '../Profile/ProfilePic.jsx';
import ContentSocial from './ContentSocial.jsx';

const ContentFoot = ({ currentUser, history, currentPost }) => (
  <>
    <div id="content-foot">
      <Router history={history}>
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
      </Router>
      <div id="content-foot-info">
        <div id="content-foot-pic">
          <ProfilePic currentUser={currentUser} />
        </div>
        <div id="content-foot-profile">
          <LinesEllipsis
            className="content-foot-about"
            text={currentUser.blurbs.aboutMe}
            ellipsis="... "
            maxLine={2}
            basedOn="letters"
          />
          <Router history={history}>
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
          </Router>
        </div>
      </div>
    </div>
    <ContentSocial currentPost={currentPost} />
  </>
);

ContentFoot.defaultProps = {
  history: {},
  currentUser: {},
  currentPost: { _id: -2 },
};

ContentFoot.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
  currentPost: propTypes.oneOfType([propTypes.object]),
};

export default ContentFoot;
