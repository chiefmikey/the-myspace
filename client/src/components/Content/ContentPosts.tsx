import propTypes from 'prop-types';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { Router, Link, withRouter } from 'react-router-dom';

const ContentPosts = ({
  sortedPosts,
  selectPost,
  currentPost,
  history,
  currentUser,
}) => {
  if (sortedPosts.length > 0) {
    return sortedPosts.map((post) => {
      return (
        <Router history={history} key={sortedPosts.indexOf(post)}>
          <Link
            to={`${currentUser.urlAddress}/${post.title.split(' ').join('-')}`}
            className="content-post"
            onClick={() => {
              selectPost(post.title);
            }}
          >
            <LinesEllipsis
              className="content-post-title"
              text={`${post.title} `}
              ellipsis="... "
              basedOn="letters"
            />
          </Link>
        </Router>
      );
    });
  }
  return (
    <div
      className="content-post"
      key={-1}
      onClick={() => selectPost(-1)}
      onKeyPress={() => selectPost(-1)}
      tabIndex={0}
      role="button"
    >
      ( None )
    </div>
  );
};

ContentPosts.defaultProps = {
  history: {},
  sortedPosts: [],
  currentPost: {},
  currentUser: {},
  selectPost: () => {},
};

ContentPosts.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  sortedPosts: propTypes.oneOfType([propTypes.array]),
  currentPost: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
  selectPost: propTypes.func,
};

export default withRouter(ContentPosts);
