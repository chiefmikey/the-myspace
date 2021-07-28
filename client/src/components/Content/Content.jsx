import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import LinesEllipsis from 'react-lines-ellipsis';
import { Router, Link, withRouter } from 'react-router-dom';

import ContentPostCurrent from './ContentPostCurrent.jsx';
import ContentPostList from './ContentPostList.jsx';
import Description from '../Profile/Description.jsx';
import ContentUpdates from '../Profile/ContentUpdates.jsx';
import NotFound from '../Landing/NotFound.jsx';

class Content extends React.Component {
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
    if (currentUser.contentPosts) {
      this.selectPost();
    }
  }

  componentDidUpdate(prevProps) {
    const { currentPost } = this.state;
    let title;
    [, , , , title] = window.location.href.split('/');
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
      history.push(
        `${currentUser.urlAddress}/${postTitle.split(' ').join('-')}`,
      );
    }
  }

  selectPost(postTitle) {
    const { currentUser } = this.props;
    let title = postTitle;
    if (!title) {
      [, , , , title] = window.location.href.split('/');
      title = title.split('-').join(' ');
    }
    // this.postUrl(title);
    // this.postHighlight(title);
    axios
      .get('/user/contentPost', {
        params: {
          urlAddress: currentUser.urlAddress,
          postTitle: title,
        },
      })
      .then((res) =>
        this.setState({ currentPost: res.data, highlightPost: res.data._id }),
      )
      .catch((error) => console.error(error));
  }

  render() {
    const { history, currentUser } = this.props;
    const { currentPost, highlightPost } = this.state;
    return currentPost._id || currentPost._id === 0 ? (
      <div id="content">
        {currentPost._id === -1 ? (
          <NotFound />
        ) : (
          <>
            <Router history={history}>
              <Link to={`${currentUser.urlAddress}`}>
                <h3>
                  <LinesEllipsis
                    className="profile-name"
                    text={`${currentUser.description.name} `}
                    ellipsis="... "
                    basedOn="letters"
                  />
                </h3>
              </Link>
            </Router>
            <div id="content-layout">
              <div id="content-left">
                <Description
                  history={history}
                  currentUser={currentUser}
                  contentView
                />
                <ContentPostList
                  history={history}
                  currentUser={currentUser}
                  selectPost={this.selectPost}
                  currentPost={currentPost}
                  highlightPost={highlightPost}
                />
                <div id="url">
                  <div id="url-name">.net URL</div>
                  <div id="url-address">
                    http://themyspace.org
                    {currentUser.urlAddress}
                  </div>
                </div>
              </div>
              <div id="content-right">
                <h4 id="headline">
                  <div id="headline-text-content">Content by</div>
                  <LinesEllipsis
                    id="headline-name"
                    text={` ${currentUser.description.name} `}
                    ellipsis="... "
                    basedOn="letters"
                  />
                </h4>
                <ContentPostCurrent currentPost={currentPost} />
                <div id="content-updates">
                  <ContentUpdates currentUser={currentUser} />
                </div>
              </div>
            </div>
          </>
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
