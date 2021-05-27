import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './Nav/Header';
import Nav from './Nav/Nav';
import Footer from './Nav/Footer';
import Landing from './Landing/Landing';
import Main from './Main/Main';
import Blog from './Blog/Blog';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
    };
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  componentDidMount() {
    this.getCurrentUser(window.location.href);
  }

  componentDidUpdate() {
    const { currentUser } = this.state;
    const extract = window.location.href.split('/')[3];
    const url = `/${extract}`;
    if (url !== currentUser.urlAddress) {
      this.getCurrentUser(url);
    }
  }

  getCurrentUser(urlAddress) {
    axios.get('/user/current', {
      params: {
        urlAddress,
      },
    })
      .then((res) => {
        this.setState({ currentUser: res.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { history } = this.props;
    const { currentUser } = this.state;
    return (
      <Router history={history}>
        <Header
          history={history}
          getCurrentUser={this.getCurrentUser}
        />
        <Nav />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Landing />
            )}
          />
          <Route
            path="/:urlAddress"
            exact
            render={(routeProps) => (
              <Main
                history={history}
                currentUser={currentUser}
                routeProps={routeProps}
                getCurrentUser={this.getCurrentUser}
              />
            )}
          />
          {/* <Route
              path={`/${currentUser.urlAddress}`}
              exact
              render={(routeProps) => (
                <Main
                  history={history}
                  currentUser={currentUser}
                  routeProps={routeProps}
                  getSelectedUser={this.getSelectedUser}
                />
              )}
            /> */}
          {/* <Route
              path={`/${selectedUser.urlAddress}`}
              render={() => <Main history={history} currentUser={selectedUser} />}
            /> */}
          <Route
            path="/:urlAddress/blog"
            render={(routeProps) => (
              <Blog
                history={history}
                currentUser={currentUser}
                routeProps={routeProps}
                getCurrentUser={this.getCurrentUser}
              />
            )}
          />
        </Switch>
        <Footer />
      </Router>
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
