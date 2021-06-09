import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

import PostedPostCurrent from './PostedPostCurrent';
import PostedPostList from './PostedPostList';
import Description from '../Profile/Description';
import PostedUpdates from '../Profile/PostedUpdates';
import PostedSocial from './PostedSocial';
import NotFound from '../Landing/NotFound';

class Posted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: {},
      highlightPost: '',
    };
    this.selectPost = this.selectPost.bind(this);
    this.postHighlight = this.postHighlight.bind(this);
  }

  componentDidMount() {
    const { currentUser } = this.props;
    if (currentUser.postedPosts) {
      this.selectPost();
    }
  }

  componentDidUpdate(prevProps) {
    const { currentPost } = this.state;
    let title;
    [,,,, title] = window.location.href.split('/');
    title = title.split('-').join(' ');
    if (title !== currentPost.title) {
      this.selectPost(title);
    }
  }

  postHighlight(postTitle) {
    this.setState({ highlightPost: postTitle });
  }

  postUrl(postTitle) {
    const { history, currentUser } = this.props;
    if (postTitle) {
      history.push(`${currentUser.urlAddress}/${postTitle.split(' ').join('-')}`);
    }
  }

  selectPost(postTitle) {
    const { currentUser } = this.props;
    let title = postTitle;
    if (!title) {
      [,,,, title] = window.location.href.split('/');
      title = title.split('-').join(' ');
    }
    // this.postUrl(title);
    // this.postHighlight(title);
    axios.get('/user/postedPost', {
      params: {
        urlAddress: currentUser.urlAddress,
        postTitle: title,
      },
    })
      .then((res) => this.setState({ currentPost: res.data, highlightPost: res.data._id }))
      .catch((error) => console.error(error));
  }

  render() {
    const { history, currentUser } = this.props;
    const { currentPost, highlightPost } = this.state;
    return currentPost._id || currentPost._id === 0
      ? (
        <div id="posted">
          {currentPost._id === -1
            ? <NotFound />
            : (
              <>
                <div id="posted-left">
                  <Description
                    history={history}
                    currentUser={currentUser}
                    posted
                  />
                  <PostedPostList
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
                    </div>
                  </div>
                </div>
                <div id="posted-right">
                  <div id="posted-title">
                    <h4>
                      Posted by
                      {' '}
                      {currentUser.description.name}
                    </h4>
                  </div>
                  <PostedPostCurrent currentPost={currentPost} />
                  <PostedSocial currentPost={currentPost} />
                  <div id="posted-updates">
                    <PostedUpdates currentUser={currentUser} />
                  </div>
                </div>
              </>
            )}

        </div>
      )
      : <></>;
  }
}

Posted.defaultProps = {
  history: {},
  currentUser: {},
};

Posted.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default Posted;
