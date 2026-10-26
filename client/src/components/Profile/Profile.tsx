import propTypes from 'prop-types';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';

import NotFound from '../Landing/NotFound';

import Blurbs from './Blurbs';
import CommentsList from './CommentsList';
import Contact from './Contact';
import Description from './Description';
import Details from './Details';
import Friends from './Friends';
import Interests from './Interests';
import ProfileContent from './ProfileContent';

class Profile extends React.Component {
  constructor(properties) {
    super(properties);
    this.state = {};
  }

  componentDidUpdate(previousProperties) {
    const { pathname, getCurrentUser } = this.props;
    if (previousProperties.pathname !== pathname) {
      getCurrentUser();
    }
  }

  render() {
    const { currentUser, getCurrentUser, sortedPosts } = this.props;

    if (currentUser._id < 0) {
      return (
        <div id="profile">
          <NotFound />
        </div>
      );
    }

    return (
      <div id="profile">
          <Link to={`${currentUser.urlAddress}`}>
            <h3>
              <LinesEllipsis
                className="profile-firstName"
                text={`${currentUser.description.firstName} ${currentUser.description.lastName} `}
                ellipsis="... "
                basedOn="letters"
              />
            </h3>
          </Link>
        <div id="profile-layout">
          <div id="profile-left">
            <Description currentUser={currentUser} />
            <Contact currentUser={currentUser} />
            <div id="url">
              <div id="url-name">.org</div>
              <div id="url-address">
                http://themyspace.org
                {currentUser.urlAddress}
              </div>
            </div>
            <Interests currentUser={currentUser} />
            <Details currentUser={currentUser} />
          </div>
          <div id="profile-right">
            <h4 id="headline">
              <LinesEllipsis
                id="headline-name"
                text={`${currentUser.description.firstName} `}
                ellipsis="... "
                basedOn="letters"
              />
              <LinesEllipsis
                id="headline-text"
                text={`is ${currentUser.headline} `}
                ellipsis="..."
                basedOn="letters"
              />
            </h4>
            <ProfileContent
              currentUser={currentUser}
              sortedPosts={sortedPosts}
            />
            <Blurbs currentUser={currentUser} />
            <Friends
              currentUser={currentUser}
              getCurrentUser={getCurrentUser}
            />
            <CommentsList
              currentUser={currentUser}
              getCurrentUser={getCurrentUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

Profile.defaultProps = {
  currentUser: {},
  getCurrentUser: () => {},
  pathname: '',
  sortedPosts: [],
};

Profile.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
  getCurrentUser: propTypes.func,
  pathname: propTypes.string,
  sortedPosts: propTypes.oneOfType([propTypes.array]),
};

export default Profile;
