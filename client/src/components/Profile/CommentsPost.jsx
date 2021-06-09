import React from 'react';
import propTypes from 'prop-types';
import Img from 'react-cool-img';
import LinesEllipsis from 'react-lines-ellipsis';
import axios from 'axios';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

import loadingImage from '../../../public/img/420.jpeg';
import errorImage from '../../../public/img/404.jpeg';

class CommentsPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentUser: {},
    };
    this.getCommentUser = this.getCommentUser.bind(this);
  }

  componentDidMount() {
    const { comment } = this.props;
    this.getCommentUser(comment[1]);
  }

  componentDidUpdate(prevProps) {
    const { currentUser, comment } = this.props;
    if (prevProps.currentUser._id !== currentUser._id) {
      this.getCommentUser(comment[1]);
    }
  }

  getCommentUser(iconUserId) {
    axios.get('/user/icon', {
      params: {
        iconUserId,
      },
    })
      .then((res) => this.setState({ commentUser: res.data }));
  }

  render() {
    const { comment, getCurrentUser, history } = this.props;
    const { commentUser } = this.state;
    return commentUser.urlAddress
      ? (
        <div className="comments-post">
          <div className="comments-post-left">
            <Router history={history}>
              <Link
                to={commentUser.urlAddress}
                className="comments-post-left-icon"
                onClick={() => {
                  getCurrentUser(commentUser.urlAddress);
                }}
              >
                <div className="comments-post-left-name">
                  <LinesEllipsis
                    text={commentUser.description.name}
                    maxLine="2"
                  />
                </div>
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
            <div className="comments-post-right-date">
              {comment[2]}
            </div>
            <div className="comments-post-right-content">
              {comment[3]}
            </div>
          </div>
        </div>
      )
      : (<div className="comments-post" />);
  }
}

CommentsPost.defaultProps = {
  comment: [],
};

CommentsPost.propTypes = {
  comment: propTypes.oneOfType([propTypes.array]),
};

export default withRouter(CommentsPost);
