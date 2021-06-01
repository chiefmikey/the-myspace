import React from 'react';
import propTypes from 'prop-types';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

import Subscribe from './Subscribe';
import MainPostedPosts from './MainPostedPosts';

class MainPosted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribeWindow: false,
    };
    this.openSubscribeWindow = this.openSubscribeWindow.bind(this);
    this.closeSubscribeWindow = this.closeSubscribeWindow.bind(this);
    this.postUrl = this.postUrl.bind(this);
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

  postUrl(postTitle) {
    const { history, currentUser } = this.props;
    if (postTitle) {
      history.push(`${currentUser.urlAddress}/${postTitle.split(' ').join('-')}`);
    }
  }

  render() {
    const { subscribeWindow } = this.state;
    const { currentUser, history } = this.props;
    const sortedPosts = currentUser.postedPosts
      ? currentUser.postedPosts.sort((a, b) => b[0] - a[0]).slice(0, 5)
      : undefined;
    return (
      <div id="main-posted">
        {subscribeWindow
          ? (
            <Subscribe
              currentUser={currentUser}
              closeSubscribeWindow={this.closeSubscribeWindow}
            />
          )
          : undefined}
        <div id="main-posted-content">
          <div id="main-posted-name">
            <h5>
              {currentUser.profileName}
              &apos;s Latest Posted Entry
              {' '}
            </h5>
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
          <MainPostedPosts postedPosts={sortedPosts} postUrl={this.postUrl} />
          <div id="main-posted-view-all">
            [
            <div className="text-button">
              <Router history={history}>
                <Link to={`${currentUser.urlAddress}/${sortedPosts[0][1].split(' ').join('-')}`}>View All Entries</Link>
              </Router>
            </div>
            ]
          </div>
        </div>
      </div>
    );
  }
}

MainPosted.defaultProps = {
  currentUser: {},
  history: {},
};

MainPosted.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
  history: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(MainPosted);
