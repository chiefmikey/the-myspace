import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

import Subscribe from './Subscribe';
import ProfileContentPosts from './ProfileContentPosts';

class ProfileContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribeWindow: false,
    };
    this.openSubscribeWindow = this.openSubscribeWindow.bind(this);
    this.closeSubscribeWindow = this.closeSubscribeWindow.bind(this);
  }

  openSubscribeWindow() {
    const { subscribeWindow } = this.state;
    if (!subscribeWindow) {
      this.setState({ subscribeWindow: true });
    }
  }

  closeSubscribeWindow() {
    const { subscribeWindow } = this.state;
    if (subscribeWindow) {
      this.setState({ subscribeWindow: false });
    }
  }

  render() {
    const { subscribeWindow } = this.state;
    const { currentUser, history, sortedPosts } = this.props;
    return (
      <div id="profile-content">
        {subscribeWindow
          ? (
            <Subscribe
              currentUser={currentUser}
              closeSubscribeWindow={this.closeSubscribeWindow}
            />
          )
          : undefined}
        <div id="profile-content-text">
          <div id="profile-content-head">
            <h5 id="profile-content-title">
              <LinesEllipsis
                id="profile-content-title-name"
                text={`${currentUser.description.name} `}
                ellipsis="... "
                basedOn="letters"
              />
              <span id="profile-content-title-text">
                &apos;s Latest Content
              </span>
            </h5>
            <div id="profile-content-subscribe">
              [
              <div
                className="a-button"
                onClick={this.openSubscribeWindow}
                onKeyPress={this.openSubscribeWindow}
                tabIndex={0}
                role="button"
              >
                Subscribe
              </div>
              ]
            </div>
          </div>
          <ProfileContentPosts
            history={history}
            currentUser={currentUser}
            sortedPosts={sortedPosts}
          />
          <div id="profile-content-view-all">
            [
            <div className="a-button">
              <Router history={history}>
                <Link to={`${currentUser.urlAddress}/${sortedPosts[0].title.split(' ').join('-')}`}>View All Posts</Link>
              </Router>
            </div>
            ]
          </div>
        </div>
      </div>
    );
  }
}

ProfileContent.defaultProps = {
  currentUser: {},
  history: {},
};

ProfileContent.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
  history: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(ProfileContent);
