import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import { Router, Link, withRouter } from 'react-router-dom';

import Description from './Description.js';
import Contact from './Contact.js';
import Interests from './Interests.js';
import Details from './Details.js';
import ProfileContent from './ProfileContent.jsx';
import Blurbs from './Blurbs.js';
import Friends from './Friends.js';
import CommentsList from './CommentsList.js';
import NotFound from '../Landing/NotFound.js';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    const { routeProps, getCurrentUser } = this.props;
    if (prevProps.routeProps.match.url !== routeProps.match.url) {
      getCurrentUser();
    }
  }

  render() {
    const { history, currentUser, getCurrentUser, sortedPosts } = this.props;

    if (currentUser._id < 0) {
      return (
        <div id="profile">
          <NotFound />
        </div>
      );
    }

    return (
      <div id="profile">
        <Router history={history}>
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
        </Router>
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
              history={history}
              sortedPosts={sortedPosts}
            />
            <Blurbs currentUser={currentUser} />
            <Friends
              currentUser={currentUser}
              history={history}
              getCurrentUser={getCurrentUser}
            />
            <CommentsList
              currentUser={currentUser}
              getCurrentUser={getCurrentUser}
              history={history}
            />
          </div>
        </div>
      </div>
    );
  }
}

Profile.defaultProps = {
  history: {},
  currentUser: {},
  getCurrentUser: () => {},
  routeProps: {},
  sortedPosts: [],
};

Profile.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
  getCurrentUser: propTypes.func,
  routeProps: propTypes.oneOfType([propTypes.object]),
  sortedPosts: propTypes.oneOfType([propTypes.array]),
};

export default withRouter(Profile);
