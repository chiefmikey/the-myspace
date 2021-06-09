import React from 'react';
import propTypes from 'prop-types';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

import Subscribe from './Subscribe';
import ProfilePostedPosts from './ProfilePostedPosts';

class ProfilePosted extends React.Component {
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
    const { currentUser, history } = this.props;
    const sortedPosts = currentUser.postedPosts
      ? currentUser.postedPosts.sort((a, b) => b._id - a._id).slice(0, 5)
      : undefined;
    return (
      <div id="profile-posted">
        {subscribeWindow
          ? (
            <Subscribe
              currentUser={currentUser}
              closeSubscribeWindow={this.closeSubscribeWindow}
            />
          )
          : undefined}
        <div id="profile-posted-content">
          <div id="profile-posted-head">
            <div id="profile-posted-name">
              <h5>
                {currentUser.description.name}
                &apos;s Latest Posted Entry
                {' '}
              </h5>
            </div>
            <div id="profile-posted-subscribe">
              [
              <div
                className="text-button"
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
          <ProfilePostedPosts
            history={history}
            currentUser={currentUser}
            postedPosts={sortedPosts}
          />
          <div id="profile-posted-view-all">
            [
            <div className="text-button">
              <Router history={history}>
                <Link to={`${currentUser.urlAddress}/${sortedPosts[0].title.split(' ').join('-')}`}>View All Entries</Link>
              </Router>
            </div>
            ]
          </div>
        </div>
      </div>
    );
  }
}

ProfilePosted.defaultProps = {
  currentUser: {},
  history: {},
};

ProfilePosted.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
  history: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(ProfilePosted);
