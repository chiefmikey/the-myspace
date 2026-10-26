import propTypes from 'prop-types';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import {Link} from 'react-router-dom';
import track from '../../telemetry';

const ProfileContentPosts = ({ currentUser, sortedPosts }) =>
  sortedPosts.map((post) => (
    <div
      className="profile-content-post"
      key={sortedPosts.indexOf(post)}
    >
      <LinesEllipsis
        className="profile-content-post-title"
        text={`${post.title} `}
        ellipsis="... "
        basedOn="letters"
      />
      <div className="profile-content-post-more">
        (
                  <Link
            to={`${currentUser.urlAddress}/${post.title.split(' ').join('-')}`}
            className="a-button"
            onClick={() => track('post_opened', { source: 'profile' })}
          >
            view more
          </Link>
        )
      </div>
    </div>
  ));

ProfileContentPosts.defaultProps = {
  sortedPosts: [],
  postUrl: () => {},
};

ProfileContentPosts.propTypes = {
  sortedPosts: propTypes.oneOfType([propTypes.array]),
  postUrl: propTypes.func,
};

export default ProfileContentPosts;
