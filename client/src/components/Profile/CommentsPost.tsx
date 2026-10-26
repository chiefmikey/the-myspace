import propTypes from 'prop-types';
import React from 'react';
import Img from 'react-cool-img';
import LinesEllipsis from 'react-lines-ellipsis';
import {Link} from 'react-router-dom';

import { getUserIcon } from '../../data';
import errorImage from '../../../public/img/404.jpeg';
import loadingImage from '../../../public/img/420.jpeg';
import track from '../../telemetry';

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
    this.setState({ commentUser: getUserIcon(iconUserId), mounted: true });
  }

  render() {
    const { comment, getCurrentUser } = this.props;
    const { commentUser } = this.state;
    return commentUser.urlAddress ? (
      <div className="comments-post">
        <div className="comments-post-left">
                      <Link
              to={commentUser.urlAddress}
              className="comments-post-left-icon"
              onClick={() => {
                track('comment_author_clicked');
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
  getCurrentUser: () => {},
  comment: [],
  currentUser: {},
};

CommentsPost.propTypes = {
  getCurrentUser: propTypes.func,
  comment: propTypes.oneOfType([propTypes.array]),
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default CommentsPost;
