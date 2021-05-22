import React from 'react';
import propTypes from 'prop-types';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './Nav/Header';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import Blog from './Blog/Blog';
import Footer from './Nav/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { history } = this.props;
    return (
      <>
        <Router history={history}>
          <Header history={history} />
          <Nav />
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Main history={history} />}
            />
            <Route
              path="/blog"
              render={() => <Blog history={history} />}
            />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

App.defaultProps = {
  history: {},
};

App.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
};

export default App;
