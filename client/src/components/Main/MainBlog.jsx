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
    const { profileName, blogPosts, history } = this.props;
    return (
      <div id="main-blog">
        {subscribeWindow
          ? (
            <Subscribe
              profileName={profileName}
              closeSubscribeWindow={this.closeSubscribeWindow}
            />
          )
          : undefined}
        <div id="main-blog-content">
          <div id="main-blog-name">
            <h5>
              {profileName}
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
          <MainBlogPosts blogPosts={blogPosts} />
          <div id="main-blog-view-all">
            [
            <div className="text-button">
              <Router history={history}>
                <Link to="/blog" onClick={() => history.push('/blog')}>View All Entries</Link>
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
  profileName: '',
  blogPosts: [],
  history: {},
};

MainBlog.propTypes = {
  profileName: propTypes.string,
  blogPosts: propTypes.oneOfType([propTypes.array]),
  history: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(MainBlog);
