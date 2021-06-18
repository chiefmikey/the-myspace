import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

import Description from './Description';
import Contact from './Contact';
import Interests from './Interests';
import Details from './Details';
import ProfileContent from './ProfileContent';
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
      sortedPosts,
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
        <Router history={history}>
          <Link to={`${currentUser.urlAddress}`}>
            <h3>
              <LinesEllipsis
                className="profile-name"
                text={`${currentUser.description.name} `}
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
            <h4 id="headline">
              <LinesEllipsis
                id="headline-name"
                text={`${currentUser.description.name} `}
                ellipsis="... "
                basedOn="letters"
              />
              <div id="headline-text">
                {`is ${currentUser.headline}`}
              </div>
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
