import React from 'react';
import propTypes from 'prop-types';

import Subscribe from './Subscribe';
import BlogPosts from './BlogPosts';

class Blog extends React.Component {
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
                className="textButton"
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
          <BlogPosts blogPosts={blogPosts} />
          <div id="blog-view-all">
            [
            <div className="textButton">
              View All Entries
            </div>
            ]
          </div>
        </div>
      </div>
    );
  }
}

Blog.defaultProps = {
  profileName: '',
  blogPosts: [],
};

Blog.propTypes = {
  profileName: propTypes.string,
  blogPosts: propTypes.oneOfType([propTypes.array]),
};

export default Blog;
