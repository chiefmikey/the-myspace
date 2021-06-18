import React from 'react';
import propTypes from 'prop-types';
import Img from 'react-cool-img';
import {
  Router,
  Link,
  withRouter,
} from 'react-router-dom';

import loadingImage from '../../../public/img/420.jpeg';
import errorImage from '../../../public/img/404.jpeg';

const ContentDescription = ({ history, currentUser }) => (
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
  history: {},
};

ContentDescription.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
  history: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(ContentDescription);
