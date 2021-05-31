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

const NotFound = ({ history }) => (
  <div id="not-found">
    <Router history={history}>
      <Link
        to="/"
      >
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
    </Router>
  </div>
);

NotFound.defaultProps = {
  history: {},
};

NotFound.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
};

export default withRouter(NotFound);
