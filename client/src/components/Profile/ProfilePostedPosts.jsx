import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsisLoose from 'react-lines-ellipsis/lib/loose';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

const ProfilePostedPosts = ({
  history, currentUser, postedPosts,
}) => (
  postedPosts.map((post) => (
    <div className="profile-posted-post" key={postedPosts.indexOf(post)}>
      <LinesEllipsisLoose
        className="profile-posted-title"
        text={post.title}
      />
      <div className="profile-posted-post-more">
        (
        <Router history={history}>
          <Link
            to={`${currentUser.urlAddress}/${post.title.split(' ').join('-')}`}
            className="text-button"
          >
            view more
          </Link>
        </Router>
        )
      </div>
    </div>
  ))
);

ProfilePostedPosts.defaultProps = {
  postedPosts: [],
  postUrl: () => {},
};

ProfilePostedPosts.propTypes = {
  postedPosts: propTypes.oneOfType([propTypes.array]),
  postUrl: propTypes.func,
};

export default withRouter(ProfilePostedPosts);
