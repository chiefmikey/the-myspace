import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

import BlogPostCurrent from './BlogPostCurrent';
import BlogPostList from './BlogPostList';
import Profile from '../Main/Profile';
import BlogUpdates from '../Main/BlogUpdates';
import BlogSocial from '../Nav/BlogSocial';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: [],
      highlightPost: -1,
    };
    this.selectPost = this.selectPost.bind(this);
    this.postHighlight = this.postHighlight.bind(this);
  }

  componentDidMount() {
    const { currentUser } = this.props;
    if (currentUser.blogPosts) {
      this.selectPost();
    }
  }

  componentDidUpdate(prevProps) {
    const { currentUser } = this.props;
    if (prevProps.currentUser.urlAddress !== currentUser.urlAddress) {
      this.selectPost();
    }
  }

  postHighlight(postId) {
    this.setState({ highlightPost: postId });
  }

  selectPost(postId) {
    const { currentUser } = this.props;
    this.postHighlight(postId);
    axios.get('/user/blogPost', {
      params: {
        urlAddress: currentUser.urlAddress,
        postId,
      },
    })
      .then((res) => this.setState({ currentPost: res.data }))
      .catch((error) => console.error(error));
  }

  render() {
    const { history, currentUser } = this.props;
    const { currentPost, highlightPost } = this.state;
    return (
      <div id="blog">
        <div id="blog-left">
          <Profile
            history={history}
            currentUser={currentUser}
            blog
          />
          <BlogPostList
            history={history}
            currentUser={currentUser}
            selectPost={this.selectPost}
            currentPost={currentPost}
            highlightPost={highlightPost}
          />
          <div id="url">
            <div id="url-name">.net URL</div>
            <div id="url-address">
              http://wolfebyte.net
              {currentUser.urlAddress}
              /blog
            </div>
          </div>
        </div>
        <div id="blog-right">
          <div id="blog-title">
            <h4>
              {currentUser.profileName}
              &apos;s Blog
            </h4>
          </div>
          <BlogPostCurrent currentPost={currentPost} />
          <BlogSocial currentPost={currentPost} />
          <div id="blog-updates">
            <BlogUpdates currentUser={currentUser} />
          </div>
        </div>
      </div>
    );
  }
}

Blog.defaultProps = {
  history: {},
  currentUser: {},
};

Blog.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default Blog;
