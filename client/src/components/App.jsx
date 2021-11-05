import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import { Router, Switch, Route } from 'react-router-dom';

import Header from './Nav/Header.jsx';
import Nav from './Nav/Nav.jsx';
import Footer from './Nav/Footer.jsx';
import LogIn from './Nav/LogIn.jsx';
// import Landing from './Landing/Landing.jsx';
import Profile from './Profile/Profile.jsx';
import Content from './Content/Content.jsx';

class App extends React.Component {
  static postSort(currentUser) {
    if (currentUser.contentPosts && currentUser.contentPosts.length > 0) {
      return currentUser.contentPosts.sort((a, b) => b._id - a._id).slice(0, 5);
    }
    return currentUser.contentPosts;
  }

  constructor() {
    super();
    this.state = {
      activeUser: { _id: -1 },
      currentUser: {},
      logIn: false,
      sortedPosts: [],
    };
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.showLogIn = this.showLogIn.bind(this);
  }

  componentDidMount() {
    this.checkUrl();
  }

  componentDidUpdate() {
    this.checkUrl();
  }

  getLocation() {
    const { history } = this.props;
    return `/${history.location.pathname.split('/')[1]}`;
  }

  async getCurrentUser() {
    try {
      const urlAddress = this.getLocation();
      const res = await axios.get('/user/current', {
        params: {
          urlAddress,
        },
      });
      const sortedPosts = App.postSort(res.data);
      this.setState({ currentUser: res.data, sortedPosts });
    } catch (e) {
      console.error('Error in App:getCurrentUser', e);
    }
  }

  checkUrl() {
    const { history } = this.props;
    const { currentUser } = this.state;
    const location = this.getLocation();
    if (location === '/') {
      history.replace('/wolfe');
    }
    if (location !== currentUser.urlAddress) {
      this.getCurrentUser();
    }
  }

  logInUser(username, email, password) {
    const { activeUser } = this.state;
    axios
      .get('user/login', {
        params: {
          username,
          email,
          password,
        },
      })
      .then((res) => this.state({ activeUser: res.data }))
      .catch((error) => console.error('Error in App:logIn', error));
  }

  showLogIn(status) {
    const { logIn } = this.state;
    if (status === 'openLogIn') {
      this.setState({ logIn: true });
    }
    if (status === 'closeLogIn') {
      this.setState({ logIn: false });
    }
  }

  render() {
    const { history } = this.props;
    const { activeUser, currentUser, logIn, sortedPosts } = this.state;
    return (
      <Router history={history}>
        {logIn ? <LogIn showLogIn={this.showLogIn} /> : undefined}
        <Header
          history={history}
          getCurrentUser={this.getCurrentUser}
          activeUser={activeUser}
          showLogIn={this.showLogIn}
        />
        <Nav />
        {this.getLocation() === currentUser.urlAddress ? (
          <Switch>
            <Route
              path="/"
              exact
              render={(routeProps) => {
                return (
                  <Profile
                    history={history}
                    currentUser={currentUser}
                    routeProps={routeProps}
                    getCurrentUser={this.getCurrentUser}
                    sortedPosts={sortedPosts}
                  />
                );
              }}
            />
            <Route
              path="/:urlAddress"
              exact
              render={(routeProps) => (
                <Profile
                  history={history}
                  currentUser={currentUser}
                  routeProps={routeProps}
                  getCurrentUser={this.getCurrentUser}
                  sortedPosts={sortedPosts}
                />
              )}
            />
            <Route
              path="/:urlAddress/:postTitle"
              exact
              render={(routeProps) => (
                <Content
                  history={history}
                  currentUser={currentUser}
                  routeProps={routeProps}
                  sortedPosts={sortedPosts}
                />
              )}
            />
          </Switch>
        ) : (
          <></>
        )}
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
