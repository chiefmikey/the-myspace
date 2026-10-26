import propTypes from 'prop-types';
import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { getCurrentUser } from '../data';

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
    const { pathname } = this.props;
    return `/${pathname.split('/')[1]}`;
  }

  getCurrentUser() {
    const user = getCurrentUser(this.getLocation());
    this.setState({ currentUser: user, sortedPosts: App.postSort(user) });
  }

  checkUrl() {
    const { navigate } = this.props;
    const { currentUser } = this.state;
    const location = this.getLocation();
    if (location === '/') {
      navigate('/wolfe', { replace: true });
    }
    if (location !== currentUser.urlAddress) {
      this.getCurrentUser();
    }
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
    const { pathname } = this.props;
    const { activeUser, currentUser, logIn, sortedPosts } = this.state;
    const profile = (
      <Profile
        currentUser={currentUser}
        pathname={pathname}
        getCurrentUser={this.getCurrentUser}
        sortedPosts={sortedPosts}
      />
    );
    return (
      <>
        {logIn ? <LogIn showLogIn={this.showLogIn} /> : undefined}
        <Header
          getCurrentUser={this.getCurrentUser}
          activeUser={activeUser}
          showLogIn={this.showLogIn}
        />
        <Nav />
        {this.getLocation() === currentUser.urlAddress ? (
          <Routes>
            <Route
              path="/:urlAddress"
              element={profile}
            />
            <Route
              path="/:urlAddress/:postTitle"
              element={
                <Content
                  currentUser={currentUser}
                  sortedPosts={sortedPosts}
                />
              }
            />
          </Routes>
        ) : (
          <></>
        )}
        <Footer />
      </>
    );
  }
}

App.defaultProps = {
  pathname: '/',
  navigate: () => {},
};

App.propTypes = {
  pathname: propTypes.string,
  navigate: propTypes.func,
};

const Main = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <App
      pathname={pathname}
      navigate={navigate}
    />
  );
};

export default Main;
