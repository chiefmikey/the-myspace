import propTypes from 'prop-types';
import React from 'react';
import Img from 'react-cool-img';

import errorImage from '../../../public/img/404.jpeg';
import loadingImage from '../../../public/img/420.jpeg';

const ProfilePic = ({ currentUser }) => (
  <div id="description-pic">
    <Img
      id="description-pic-img"
      src={currentUser.description.pic}
      placeholder={loadingImage}
      error={errorImage}
      lazy
      cache
      alt="Profile picture"
    />
  </div>
);

export default ProfilePic;

ProfilePic.defaultProps = {
  currentUser: {},
};

ProfilePic.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
};
