import React from 'react';
import propTypes from 'prop-types';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

import Subscribe from './Subscribe';
import MainBlogPosts from './MainBlogPosts';

class MainBlog extends React.Component {
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
    const sortedPosts = currentUser.blogPosts
      ? currentUser.blogPosts.sort((a, b) => b[0] - a[0]).slice(0, 5)
      : undefined;
    return (
      <div id="main-blog">
        {subscribeWindow
          ? (
            <Subscribe
              currentUser={currentUser}
              closeSubscribeWindow={this.closeSubscribeWindow}
            />
          )
          : undefined}
        <div id="main-blog-content">
          <div id="main-blog-name">
            <h5>
              {currentUser.profileName}
              &apos;s Latest Blog Entry
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
          <MainBlogPosts blogPosts={sortedPosts} />
          <div id="main-blog-view-all">
            [
            <div className="text-button">
              <Router history={history}>
                <Link to={`${currentUser.urlAddress}/blog`}>View All Entries</Link>
              </Router>
            </div>
            ]
          </div>
        </div>
      </div>
    );
  }
}

MainBlog.defaultProps = {
  currentUser: {},
  history: {},
};

MainBlog.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
  history: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(MainBlog);
