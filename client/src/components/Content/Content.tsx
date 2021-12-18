import axios from 'axios';
import propTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import NotFound from '../Landing/NotFound.jsx';

import ContentAll from './ContentAll.jsx';
import ContentFoot from './ContentFoot';
import ContentPostCurrent from './ContentPostCurrent.jsx';

class Content extends React.Component {
  constructor(properties) {
    super(properties);
    this.state = {
      currentPost: { _id: -2 },
    };
    this.selectPost = this.selectPost.bind(this);
  }

  componentDidMount() {
    const { currentUser } = this.props;
    if (currentUser.contentPosts) {
      this.selectPost();
    }
  }

  componentDidUpdate(previousProperties) {
    const { history } = this.props;
    const { currentPost } = this.state;
    let title;
    [, , title] = history.location.pathname.split('/');
    title = title.split('-').join(' ');
    if (title !== currentPost.title) {
      this.selectPost(title);
    }
  }

  postUrl(postTitle) {
    const { history, currentUser } = this.props;
    if (postTitle) {
      history.push(
        `${currentUser.urlAddress}/${postTitle.split(' ').join('-')}`,
      );
    }
  }

  selectPost(postTitle) {
    const { history } = this.props;
    const { currentUser } = this.props;
    let title = postTitle;
    if (!title) {
      [, , title] = history.location.pathname.split('/');
      title = title.split('-').join(' ');
    }
    axios
      .get('/user/contentPost', {
        params: {
          urlAddress: currentUser.urlAddress,
          postTitle: title,
        },
      })
      .then((res) => this.setState({ currentPost: res.data }))
      .catch((error) => console.error(error));
  }

  render() {
    const { history, currentUser } = this.props;
    const { currentPost } = this.state;
    return currentPost._id || currentPost._id === 0 ? (
      <div id="content">
        {currentPost._id === -1 ? (
          <NotFound />
        ) : (
          <div id="content-layout">
            {currentPost._id === -2 ? (
              <ContentAll
                history={history}
                currentUser={currentUser}
                currentPost={currentPost}
                selectPost={this.selectPost}
              />
            ) : (
              <>
                <ContentPostCurrent currentPost={currentPost} />
                <ContentFoot
                  history={history}
                  currentUser={currentUser}
                  currentPost={currentPost}
                />
              </>
            )}
          </div>
        )}
      </div>
    ) : (
      <></>
    );
  }
}

Content.defaultProps = {
  history: {},
  currentUser: {},
};

Content.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(Content);
