import propTypes from 'prop-types';
import React from 'react';
import Img from 'react-cool-img';
import {Link} from 'react-router-dom';

import errorImage from '../../../public/img/404.jpeg';
import loadingImage from '../../../public/img/420.jpeg';

const NotFound = () => (
  <div id="not-found">
          <Link to="/">
        <Img
          id="not-found-pic-img"
          src={errorImage}
          placeholder={loadingImage}
          error={errorImage}
          lazy
          cache
          alt="not found"
        />
      </Link>
  </div>
);

NotFound.defaultProps = {
};

NotFound.propTypes = {
};

export default NotFound;
