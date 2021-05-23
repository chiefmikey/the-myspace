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
import Main from './Main/Main';
import Blog from './Blog/Blog';
import Footer from './Nav/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      // currentUserId: 0,
    };
    this.getSelectedUser = this.getSelectedUser.bind(this);
    this.getUrlUser = this.getUrlUser.bind(this);
  }

  componentDidMount() {
    // const { currentUserId } = this.state;
    this.getCurrentUser(window.location.href);
  }

  getCurrentUser(urlAddress) {
    axios.get('/user/current', {
      params: {
        urlAddress,
      },
    })
      .then((res) => {
        this.setState({ currentUser: res.data });
      });
  }

  getSelectedUser(selectedUserId) {
    axios.get('/user/selected', {
      params: {
        selectedUserId,
      },
    })
      .then((res) => {
        this.setState({ currentUser: res.data });
      });
  }

  getUrlUser(urlAddress) {
    axios.get('/user/url', {
      params: {
        urlAddress,
      },
    })
      .then((res) => {
        this.setState({ currentUser: res.data, currentUserId: res.data._id });
      });
  }

  render() {
    const { history } = this.props;
    const { currentUser } = this.state;
    return (
      <>
        <Router history={history}>
          <Header history={history} />
          <Nav />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Main
                  history={history}
                  currentUser={currentUser}
                  getSelectedUser={this.getSelectedUser}
                />
              )}
            />
            <Route
              path={`/${currentUser.urlAddress}`}
              exact
              render={() => <Main history={history} currentUser={currentUser} />}
            />
            {/* <Route
              path={`/${selectedUser.urlAddress}`}
              render={() => <Main history={history} currentUser={selectedUser} />}
            /> */}
            <Route
              path={`/${currentUser.urlAddress}/blog`}
              render={() => <Blog history={history} currentUser={currentUser} />}
            />
            <Route
              path="/:urlAddress"
              render={(routeProps) => (
                <Main
                  history={history}
                  currentUser={currentUser}
                  routeProps={routeProps}
                  getSelectedUser={this.getSelectedUser}
                  getUrlUser={this.getUrlUser}
                />
              )}
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
