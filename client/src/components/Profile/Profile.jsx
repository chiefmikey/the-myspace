import React from 'react';
import propTypes from 'prop-types';

import Description from './Description';
import Contact from './Contact';
import Interests from './Interests';
import Details from './Details';
import ProfilePosted from './ProfilePosted';
import Blurbs from './Blurbs';
import Friends from './Friends';
import CommentsList from './CommentsList';
import NotFound from '../Landing/NotFound';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   const { routeProps, getCurrentUser } = this.props;
  //   getCurrentUser(routeProps.match.url);
  // }

  componentDidUpdate(prevProps) {
    const { routeProps, getCurrentUser } = this.props;
    if (prevProps.routeProps.match.url !== routeProps.match.url) {
      getCurrentUser(routeProps.match.url);
    }
  }

  render() {
    const {
      history,
      currentUser,
      getCurrentUser,
    } = this.props;
    if (currentUser._id < 0) {
      return (
        <div id="profile">
          <NotFound />
        </div>
      );
    }

    return (
      <div id="profile">
        <div id="profile-left">
          <Description currentUser={currentUser} />
          <Contact currentUser={currentUser} />
          <div id="url">
            <div id="url-name">
              .net URL
            </div>
            <div id="url-address">
              http://wolfebyte.net
              {currentUser.urlAddress}
            </div>
          </div>
          <Interests currentUser={currentUser} />
          <Details currentUser={currentUser} />
        </div>
        <div id="profile-right">
          <div id="headline">
            <h4>
              {currentUser.descriptionName}
              {' '}
              is
              {' '}
              {currentUser.headline}
            </h4>
          </div>
          <ProfilePosted
            currentUser={currentUser}
            history={history}
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
    );
  }
}

Profile.defaultProps = {
  history: {},
  currentUser: {},
  getCurrentUser: () => {},
  routeProps: {},
};

Profile.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
  getCurrentUser: propTypes.func,
  routeProps: propTypes.oneOfType([propTypes.object]),
};

export default Profile;
