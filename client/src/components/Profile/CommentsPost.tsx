import axios from 'axios';
import propTypes from 'prop-types';
import React from 'react';
import Img from 'react-cool-img';
import LinesEllipsis from 'react-lines-ellipsis';
import { Router, Link, withRouter } from 'react-router-dom';

import errorImage from '../../../public/img/404.jpeg';
import loadingImage from '../../../public/img/420.jpeg';

class CommentsPost extends React.Component {
  constructor(properties) {
    super(properties);
    this.state = {
      commentUser: {},
      mounted: false,
    };
    this.getCommentUser = this.getCommentUser.bind(this);
  }

  componentDidMount() {
    const { comment } = this.props;
    this.getCommentUser(comment[1]);
  }

  componentDidUpdate(previousProperties) {
    const { currentUser, comment } = this.props;
    const { mounted } = this.state;
    if (mounted && previousProperties.currentUser._id !== currentUser._id) {
      this.getCommentUser(comment[1]);
    }
  }

  componentWillUnmount() {
    this.setState({ mounted: false });
  }

  getCommentUser(iconUserId) {
    axios
      .get('/user/icon', {
        params: {
          iconUserId,
        },
      })
      .then((res) => this.setState({ commentUser: res.data, mounted: true }));
  }

  render() {
    const { comment, getCurrentUser, history } = this.props;
    const { commentUser } = this.state;
    return commentUser.urlAddress ? (
      <div className="comments-post">
        <div className="comments-post-left">
          <Router history={history}>
            <Link
              to={commentUser.urlAddress}
              className="comments-post-left-icon"
              onClick={() => {
                getCurrentUser();
              }}
            >
              <LinesEllipsis
                className="comments-post-left-name"
                text={`${commentUser.description.firstName} `}
                ellipsis="... "
                basedOn="letters"
              />
              <Img
                className="comments-post-left-pic"
                src={commentUser.description.pic}
                placeholder={loadingImage}
                error={errorImage}
                lazy
                cache
                alt="comment author avatar"
              />
            </Link>
          </Router>
        </div>
        <div className="comments-post-right">
          <div className="comments-post-right-date">{comment[2]}</div>
          <div className="comments-post-right-text">{comment[3]}</div>
        </div>
      </div>
    ) : (
      <div className="comments-post" />
    );
  }
}

CommentsPost.defaultProps = {
  history: {},
  getCurrentUser: () => {},
  comment: [],
  currentUser: {},
};

CommentsPost.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  getCurrentUser: propTypes.func,
  comment: propTypes.oneOfType([propTypes.array]),
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(CommentsPost);
