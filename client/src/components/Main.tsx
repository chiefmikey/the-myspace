import axios from 'axios';
import propTypes from 'prop-types';
import React from 'react';
import { Router, Route } from 'react-router-dom';

import Content from './Content/Content';
import Footer from './Nav/Footer';
import Header from './Nav/Header';
import LogIn from './Nav/LogIn';
import Nav from './Nav/Nav';
// import Landing from './Landing/Landing';
import Profile from './Profile/Profile';

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
    } catch (error) {
      console.error('Error in App:getCurrentUser', error);
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
              render={(routeProperties) => {
                return (
                  <Profile
                    history={history}
                    currentUser={currentUser}
                    routeProps={routeProperties}
                    getCurrentUser={this.getCurrentUser}
                    sortedPosts={sortedPosts}
                  />
                );
              }}
            />
            <Route
              path="/:urlAddress"
              exact
              render={(routeProperties) => (
                <Profile
                  history={history}
                  currentUser={currentUser}
                  routeProps={routeProperties}
                  getCurrentUser={this.getCurrentUser}
                  sortedPosts={sortedPosts}
                />
              )}
            />
            <Route
              path="/:urlAddress/:postTitle"
              exact
              render={(routeProperties) => (
                <Content
                  history={history}
                  currentUser={currentUser}
                  routeProps={routeProperties}
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
