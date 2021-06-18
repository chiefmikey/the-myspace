import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

const ProfileContentPosts = ({
  history, currentUser, sortedPosts,
}) => (
  sortedPosts.map((post) => (
    <div className="profile-content-post" key={sortedPosts.indexOf(post)}>
      <LinesEllipsis
        className="profile-content-post-title"
        text={`${post.title} `}
        ellipsis="... "
        basedOn="letters"
      />
      <div className="profile-content-post-more">
        (
        <Router history={history}>
          <Link
            to={`${currentUser.urlAddress}/${post.title.split(' ').join('-')}`}
            className="a-button"
          >
            view more
          </Link>
        </Router>
        )
      </div>
    </div>
  ))
);

ProfileContentPosts.defaultProps = {
  sortedPosts: [],
  postUrl: () => {},
};

ProfileContentPosts.propTypes = {
  sortedPosts: propTypes.oneOfType([propTypes.array]),
  postUrl: propTypes.func,
};

export default withRouter(ProfileContentPosts);
