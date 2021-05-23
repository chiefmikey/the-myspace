import React from 'react';
import propTypes from 'prop-types';

import Profile from './Profile';
import Contact from './Contact';
import Interests from './Interests';
import Details from './Details';
import MainBlog from './MainBlog';
import Blurbs from './Blurbs';
import Friends from './Friends';
import CommentsList from './CommentsList';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { routeProps, getUrlUser } = this.props;
    if (getUrlUser) {
      getUrlUser(routeProps.match.url);
    }
  }

  componentDidUpdate(prevProps) {
    const { routeProps, getUrlUser } = this.props;
    if (getUrlUser) {
      if (prevProps.routeProps.match.url !== routeProps.match.url) {
        getUrlUser(routeProps.match.url);
      }
    }
  }

  render() {
    const {
      history,
      currentUser,
      getSelectedUser,
    } = this.props;

    return (
      <div id="main">
        <div id="main-left">
          <Profile currentUser={currentUser} />
          <Contact currentUser={currentUser} />
          <div id="url">
            <div id="url-name">
              .net URL
            </div>
            <div id="url-address">
              http://wolfebyte.net/
              {currentUser.urlAddress}
            </div>
          </div>
          <Interests currentUser={currentUser} />
          <Details currentUser={currentUser} />
        </div>
        <div id="main-right">
          <div id="headline">
            <h4>
              {currentUser.profileName}
              {' '}
              is
              {' '}
              {currentUser.headline}
            </h4>
          </div>
          <MainBlog
            currentUser={currentUser}
            history={history}
          />
          <Blurbs currentUser={currentUser} />
          <Friends
            currentUser={currentUser}
            history={history}
            getSelectedUser={getSelectedUser}
          />
          <CommentsList currentUser={currentUser} />
        </div>
      </div>
    );
  }
}

Main.defaultProps = {
  history: {},
  currentUser: {},
};

Main.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default Main;
