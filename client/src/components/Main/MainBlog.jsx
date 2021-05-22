import React from 'react';
import propTypes from 'prop-types';

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
    const { profileName, blogPosts } = this.props;
    return (
      <div id="blog">
        {subscribeWindow
          ? (
            <Subscribe
              profileName={profileName}
              closeSubscribeWindow={this.closeSubscribeWindow}
            />
          )
          : undefined}
        <div id="blog-content">
          <div id="blog-name">
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
          <div id="blog-view-all">
            [
            <div className="text-button">
              View All Entries
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
};

MainBlog.propTypes = {
  profileName: propTypes.string,
  blogPosts: propTypes.oneOfType([propTypes.array]),
};

export default MainBlog;
