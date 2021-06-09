import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsisLoose from 'react-lines-ellipsis/lib/loose';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

const PostedPosts = ({
  sortedPosts, selectPost, currentPost, highlightPost, history, currentUser,
}) => {
  if (sortedPosts.length > 0) {
    let highlightId = highlightPost;
    return sortedPosts.map((post) => {
      let className = 'posted-post';
      if (!highlightId && highlightId !== 0) {
        highlightId = sortedPosts[0]._id;
      }
      if (highlightId === post._id) {
        className = 'posted-post selected';
      }
      return (
        <Router history={history} key={sortedPosts.indexOf(post)}>
          <Link
            to={`${currentUser.urlAddress}/${post.title.split(' ').join('-')}`}
            className={className}
            onClick={() => {
              selectPost(post.title);
            }}
          >
            <LinesEllipsisLoose
              className="posted-post-title"
              text={post.title}
            />
          </Link>
        </Router>
      );
    });
  }
  return (
    <div
      className="posted-post selected"
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

PostedPosts.defaultProps = {
  history: {},
  sortedPosts: [],
  currentPost: {},
  currentUser: {},
  selectPost: () => {},
  highlightPost: -1,
};

PostedPosts.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  sortedPosts: propTypes.oneOfType([propTypes.array]),
  currentPost: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
  selectPost: propTypes.func,
  highlightPost: propTypes.number,
};

export default withRouter(PostedPosts);
