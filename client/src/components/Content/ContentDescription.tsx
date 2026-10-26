import propTypes from 'prop-types';
import React from 'react';
import Img from 'react-cool-img';
import {Link} from 'react-router-dom';

import errorImage from '../../../public/img/404.jpeg';
import loadingImage from '../../../public/img/420.jpeg';

const ContentDescription = ({ currentUser }) => (
  <div id="description">
    <div id="description-pic">
      <Img
        id="description-pic-img"
        src={currentUser.description.pic}
        placeholder={loadingImage}
        error={errorImage}
        lazy
        cache
        alt="user description avatar"
      />
    </div>
  </div>
);

ContentDescription.defaultProps = {
  currentUser: {},
};

ContentDescription.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default ContentDescription;
