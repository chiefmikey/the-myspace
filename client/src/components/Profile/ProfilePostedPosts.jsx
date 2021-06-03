import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

const ProfilePostedPosts = ({ postedPosts, postUrl }) => (
  postedPosts.map((post) => (
    <div className="profile-posted-post" key={postedPosts.indexOf(post)}>
      <LinesEllipsis
        text={post[1]}
        maxLine="1"
        ellipsis="..."
        trimRight
      />
      <span className="profile-posted-post-more">
        (
        <div
          className="text-button"
          onClick={() => postUrl(post[1])}
          onKeyPress={() => postUrl(post[1])}
          tabIndex={0}
          role="button"
        >
          view more
        </div>
        )
      </span>
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

export default ProfilePostedPosts;
