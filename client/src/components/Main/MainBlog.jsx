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
    return (
      <div id="main-blog">
        {subscribeWindow
          ? (
            <Subscribe
              profileName={currentUser.profileName}
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
            </h5>
          </div>
          <MainBlogPosts blogPosts={currentUser.blogPosts} />
          <div id="main-blog-view-all">
            [
            <div className="text-button">
              <Router history={history}>
                <Link to={`${currentUser.urlAddress}/blog`} onClick={() => history.push(`${currentUser.urlAddress}/blog`)}>View All Entries</Link>
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
